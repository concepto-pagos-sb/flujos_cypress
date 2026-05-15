/// <reference types="cypress" />

describe('Usuarios', () => {
    
    it('Flujo completo: crear usuario, validar excepciones y acciones de cancelar/eliminar', () => {
        /* ===============  LOGIN  =============== */
        cy.Loginss();

        /* =======  TODO LO DEMÁS OCURRE EN EL DASHBOARD  ======= */
        cy.origin('https://dashboard-qa.conceptopagos.com', () => {
            cy.visit('https://dashboard-qa.conceptopagos.com/')
            /* ---------- Validar acceso y cerrar pop-up (si aparece) ------------ */
            cy.location('origin', { timeout: 20_000 }).should(
                'eq',
                'https://dashboard-qa.conceptopagos.com'
            );
            cy.url().should('include', 'dashboard-qa.conceptopagos.com');

            cy.get('mat-dialog-container', { timeout: 20_000 }).then(($popup) => {
                if ($popup.length && $popup.is(':visible')) {
                    cy.get('button.button-primary.px-3.close-button')
                        .contains('Más info')
                        .click({ delay: 100 });
                }
            });

            /* ---------- Asegurar visibilidad de barra lateral ---------- */
            cy.get('.mat-drawer.mat-sidenav').should(($el) => {
                const style = $el.attr('style');
                expect(style).to.include('visibility: visible');
                expect(style).to.include('transform: none');
            });

            /* Abre / cierra menú sólo para forzar render y evitar bugs visuales */
            cy.get('.mat-icon.icon-menu').click();
            cy.wait(3000);
            cy.get('.mat-icon.icon-menu').click();

            /* ===================================================================
               1)  CREAR USUARIO  –– Happy Path
            =================================================================== */
            cy.contains('span', ' Usuarios ').click();
            cy.wait(2000);
            cy.get('button.add-user-button').first().click();

            /** Datos aleatorios */
            const nombres = ['Alex', 'María', 'Luis', 'Camila', 'Jorge'];
            const apellidosPaterno = ['Torres', 'Ramírez', 'Gómez', 'Díaz', 'Mendoza'];
            const apellidosMaterno = ['Luna', 'Martínez', 'Rojas', 'Pérez', 'Vargas'];
            const correos = [
                'correo1@gmail.com',
                'correo2@yahoo.com',
                'correo3@hotmail.com',
                'correo4@hotmail.com'
            ];
            const telefonos = ['5678905467', '5512345678', '4421239876', '3339876543'];
            const alAzar = (arr) => arr[Math.floor(Math.random() * arr.length)];

            cy.get('input[formcontrolname="name"]').type(alAzar(nombres), {delay:100});
            cy.get('input[formcontrolname="lastName"]').type(alAzar(apellidosPaterno), {delay:100});
            cy.get('input[formcontrolname="secondLastName"]').type(alAzar(apellidosMaterno), {delay:100});
            cy.get('input[formcontrolname="email"]').type(alAzar(correos)), {delay:100};
            cy.get('input[formcontrolname="phoneNumber"]').type(alAzar(telefonos), {delay:100});

            const roles = [
                'CUSTOMER_PORTAL_ADMINISTRATOR',
                'CUSTOMER_PORTAL_SELLER',
                'CUSTOMER_PORTAL_FINANCE',
                'CUSTOMER_PORTAL_MANAGER'
            ];
            cy.get('select[formcontrolname="rol"]:visible').select(alAzar(roles));

            cy.contains('button', 'Guardar').click();
            cy.get('.mat-mdc-snack-bar-label')
                .should('be.visible')
                .and('contain.text', 'Se ha agregado el usuario correctamente');

            /* ===================================================================
               2)  VALIDAR EXCEPCIONES  –– Campos inválidos
            =================================================================== */
            //Se da click en el botón "crear nuevo". Esto lanza un form
            cy.get('button.add-user-button', { timeout: 10000 }).first().click();
            cy.wait(2000);


            const datosErroneos = {
                name: 'Nando@123',
                lastName: 'Yañez456',
                secondLastName: 'Arvizu789',
                email: 'fergmail.com',
                phoneNumber: '1234567890'
            };

            Object.entries(datosErroneos).forEach(([campo, valorErroneo], index) => {
                // Llenar el campo con valor erróneo
                cy.get(`input[formcontrolname="${campo}"]`, { timeout: 10000 })
                    .should('exist')
                    .clear()
                    .type(valorErroneo, { delay: 100 })
                    .blur();

                // Validar el mat-error correspondiente (asumiendo orden de aparición)
                cy.get('mat-error')
                    .eq(index) // Asumiendo que el error aparece en el mismo orden que los campos
                    .scrollIntoView()
                    .should('be.visible')
                    .and('contain.text', 'Campo inválido');
            });

            // Hacer clic en el botón "Guardar"
            cy.get('button').contains('Guardar').click();

            // Validar que aparece el mensaje del snackbar
            cy.get('.mat-mdc-snack-bar-label')
                .should('be.visible')
                .and('contain.text', '¡Hay campos obligatorios vacios o inválidos!');

            cy.contains('button', 'Cancelar').click();
            cy.wait(2000);

             /* ===================================================================
           3)  CANCELAR ELIMINACIÓN
        =================================================================== */
        // Hace clic en el ícono de opciones (3 puntos verticales)
        cy.contains('mat-icon', 'more_vert').click();

        // Selecciona la opción "Eliminar" del menú contextual
        cy.contains('a.dropdown-item', 'Eliminar').click();

        // Verifica que aparezca el diálogo de confirmación de eliminación
        cy.contains('¿Estás seguro de eliminar este usuario?').should('be.visible');
        cy.get('h1[mat-dialog-title]').should('be.visible'); // Verifica el título del modal

        // Hace scroll al final del diálogo para asegurar visibilidad de los botones
        cy.get('.mat-mdc-dialog-surface').scrollTo('bottom');

        // Verifica que existan los botones "Aceptar" y "Cancelar"
        cy.contains('span.mdc-button__label', 'Aceptar').should('be.visible');
        cy.contains('span.mdc-button__label', 'Cancelar').should('be.visible').click(); // Cancela la acción


        /* ===================================================================
       4)  ELIMINAR USUARIO  –– Happy Path
    =================================================================== */
    // Hace clic en el ícono de opciones (3 puntos verticales)
    cy.contains('mat-icon', 'more_vert').click();

    // Selecciona la opción "Eliminar" del menú contextual
    cy.contains('a.dropdown-item', 'Eliminar').click();

    // Verifica que aparezca el diálogo de confirmación de eliminación
    cy.contains('¿Estás seguro de eliminar este usuario?').should('be.visible');
    cy.get('h1[mat-dialog-title]').should('be.visible'); // Verifica el título del modal

    // Hace scroll al final del diálogo para asegurar visibilidad de los botones
    cy.get('.mat-mdc-dialog-surface').scrollTo('bottom');

    // Verifica que existan los botones "Aceptar" y "Cancelar"
    cy.contains('span.mdc-button__label', 'Cancelar').should('be.visible');
    cy.contains('span.mdc-button__label', 'Aceptar').should('be.visible').click(); //Se elimina el usuario

    cy.get('.mat-mdc-snack-bar-label', { timeout: 3000 })
        .should('be.visible')
        .and('contain.text', 'Se ha eliminado el usuario correctamente');
    });

        });

       

    
});


