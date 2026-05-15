describe('Suscriptores', () => {

    it('Flujo de suscripciones para consultar por suscripción', () => {
        cy.Loginss();

        cy.origin(
            'https://dashboard-qa.conceptopagos.com',
            { args: {} },
            () => {
                cy.visit('/');

                cy.location('origin', { timeout: 2000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');
                cy.url().should('include', 'dashboard-qa.conceptopagos.com');

                cy.get('mat-dialog-container', { timeout: 20000 }).then(($popup) => {
                    if ($popup.length && $popup.is(':visible')) {
                        cy.get('button.button-primary.px-3.close-button')
                            .contains('Más info')
                            .click({ delay: 100 });
                    }
                });

                cy.get('.mat-drawer.mat-sidenav').should(($el) => {
                    const style = $el.attr('style');
                    expect(style).to.include('visibility: visible');
                    expect(style).to.include('transform: none');
                });

                cy.get('.mat-icon.icon-menu').click({ delay: 200 });
                cy.wait(3000);
                cy.get('.mat-icon.icon-menu').click({ delay: 200 });

                /////////////////////////////////////////////////////////////////////////
                /////////////////////AQUI INGRESAN SUS PARAMETROS/////////////////////////
                //////////////////////////////////////////////////////////////////////////
                let nombreSuscriptor = "Armando"
                let nombreSuscripcion = 'Prueba viernes'
                let mesActual = 'Junio 2025'
                let mesPasado = 'Mayo 2025'

                // Navegar a Pagos Recurrentes
                cy.contains('span', 'Pagos a Distancia').click({ delay: 200 });
                cy.wait(2000);
                cy.get('a[href="/remote-payments/recurring-payments"]').click({ delay: 200 });
                cy.wait(2000);


                //Consultar 
                //Navegar a cobros
                cy.contains('span', 'Suscriptores').click();
                cy.wait(2000);
                cy.contains('mat-icon', 'menu').click();
                cy.wait(2000);

                //////////////////////////7//CONSULTAR POR NOMBRE DE SUSCRIPTOR///////////////77
                cy.get('input[placeholder="Nombre del suscriptor"]').type(nombreSuscriptor, { delay: 100 });

                cy.wait(1500)

                //Hacer clic en el boton de consultar
                cy.get('button.consultar-button').click();

                cy.wait(5000)

                //Se verifica que aparecen registros
                cy.contains('th', 'Suscripción').should('be.visible');

                cy.wait(2000)

                //Refresca los campos para hacer otra consulta
                cy.contains('mat-icon', 'refresh').click();

                /////////////////////////7CONSULTAR POR NOMBRE DE SUSCRIPCIÓN//////////////////////////////
                cy.get('input[placeholder="Nombre de la suscripción"]').type(nombreSuscripcion, { delay: 100 });

                //Hacer clic en el boton de consultar
                cy.get('button.consultar-button').click();

                cy.wait(5000)

                //Se verifica que aparecen registros
                cy.contains('th', 'Suscripción').should('be.visible');

                cy.wait(2000)

                //Refresca los campos para hacer otra consulta
                cy.contains('mat-icon', 'refresh').click();

                ////////////////////////////CONSULTA POR MES//////////////////////////////////
                //Consulta el mes actual
                cy.get('select[formcontrolname="startDate"]').select(mesActual);

                cy.wait(2000)

                //Hacer clic en el boton de consultar
                cy.get('button.consultar-button').click();

                cy.wait(5000)

                //Consulta el mes pasado
                cy.get('select[formcontrolname="startDate"]').select(mesPasado);

                cy.wait(2000)

                //Hacer clic en el boton de consultar
                cy.get('button.consultar-button').click();

                cy.wait(5000)

                //Se verifica que aparecen registros
                cy.contains('th', 'Suscripción').should('be.visible');

                cy.wait(2000)
            }
        );
    });


    it('Flujo de suscripciones para consultar por suscripción', () => {
        cy.Loginss();

        cy.origin(
            'https://dashboard-qa.conceptopagos.com',
            { args: {} },
            () => {
                cy.visit('/');

                cy.location('origin', { timeout: 2000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');
                cy.url().should('include', 'dashboard-qa.conceptopagos.com');

                cy.get('mat-dialog-container', { timeout: 20000 }).then(($popup) => {
                    if ($popup.length && $popup.is(':visible')) {
                        cy.get('button.button-primary.px-3.close-button')
                            .contains('Más info')
                            .click({ delay: 100 });
                    }
                });

                cy.get('.mat-drawer.mat-sidenav').should(($el) => {
                    const style = $el.attr('style');
                    expect(style).to.include('visibility: visible');
                    expect(style).to.include('transform: none');
                });

                cy.get('.mat-icon.icon-menu').click({ delay: 200 });
                cy.wait(3000);
                cy.get('.mat-icon.icon-menu').click({ delay: 200 });


                // Navegar a Pagos Recurrentes
                cy.contains('span', 'Pagos a Distancia').click({ delay: 200 });
                cy.wait(2000);
                cy.get('a[href="/remote-payments/recurring-payments"]').click({ delay: 200 });
                cy.wait(2000);

                //Navegar a suscriptores
                cy.contains('span', 'Suscriptores').click();
                cy.wait(2000);
                cy.contains('mat-icon', 'menu').click();

                cy.wait(2000);
                cy.contains('mat-icon', 'more_vert').first().click();
                cy.wait(2000);

                cy.contains('a.dropdown-item', 'Ver detalle').click();

            }
        );
    });

    it('Flujo de suscripciones para consultar por suscripción', () => {
        cy.Loginss();

        cy.origin(
            'https://dashboard-qa.conceptopagos.com',
            { args: {} },
            () => {
                cy.visit('/');

                cy.location('origin', { timeout: 2000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');
                cy.url().should('include', 'dashboard-qa.conceptopagos.com');

                cy.get('mat-dialog-container', { timeout: 20000 }).then(($popup) => {
                    if ($popup.length && $popup.is(':visible')) {
                        cy.get('button.button-primary.px-3.close-button')
                            .contains('Más info')
                            .click({ delay: 100 });
                    }
                });

                cy.get('.mat-drawer.mat-sidenav').should(($el) => {
                    const style = $el.attr('style');
                    expect(style).to.include('visibility: visible');
                    expect(style).to.include('transform: none');
                });

                cy.get('.mat-icon.icon-menu').click({ delay: 200 });
                cy.wait(3000);
                cy.get('.mat-icon.icon-menu').click({ delay: 200 });


                // Navegar a Pagos Recurrentes
                cy.contains('span', 'Pagos a Distancia').click({ delay: 200 });
                cy.wait(2000);
                cy.get('a[href="/remote-payments/recurring-payments"]').click({ delay: 200 });
                cy.wait(2000);

                //Navegar a suscriptores
                cy.contains('span', 'Suscriptores').click();
                cy.wait(2000);
                cy.contains('mat-icon', 'menu').click();

                cy.contains('mat-icon', 'more_vert').first().click();
                cy.wait(2000);

                cy.contains('a', 'Desactivar suscriptor').click();

                cy.contains('span.mdc-button__label', 'Cancelar').click();

                cy.contains('mat-icon', 'more_vert').first().click();
                cy.wait(2000);

                cy.contains('a', 'Desactivar suscriptor').click();

                cy.contains('span.mdc-button__label', 'Desactivar').click();

            }
        );
    });
})