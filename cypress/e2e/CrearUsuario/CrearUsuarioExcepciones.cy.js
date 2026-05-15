describe('CrearUsuarioExcepciones', () => {

    const Link = 'https://auth-qa.conceptopagos.com/sso/realms/CMmobile/protocol/openid-connect/auth?client_id=Client_Front_Portal&redirect_uri=https%3A%2F%2Fdashboard-qa.conceptopagos.com%2Fprofile&state=0eaef5fc-cd72-47e4-9895-9ce59cd19e37&response_mode=fragment&response_type=code&scope=openid&nonce=de7e957a-88e9-4e40-ae8d-a789c7d65f5f&code_challenge=oXaj1JMRN5HCDuzojQK4ebPBfiUQUSRbG03q1JTOjjs&code_challenge_method=S256'

    beforeEach(() => {
        cy.visit(Link);
    });

    it('Valida que muestre "campo invalido" al ingresar un nombre no valido', () => {

        cy.Login();

        cy.origin('https://dashboard-qa.conceptopagos.com', () => {

            // VALIDACIÓN DE INGRESO AL DASHBORAD
            cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');
            cy.url().should('include', 'dashboard-qa.conceptopagos.com');


            // *************************** POP UP NOTIFICACION **************************************/

            cy.get('mat-dialog-container', { timeout: 20000 }).then(($popupnoti) => {
                if ($popupnoti.length > 0 && $popupnoti.is(':visible')) {
                    cy.get('button.button-primary.px-3.close-button', { timeout: 10000 })
                        .contains('Más info')
                        .click({ delay: 100 });
                } else {
                    cy.log('No hay pop-up visible');
                }
            });




            // **************************** Barra lateral ********************************/
            cy.get('.mat-drawer.mat-sidenav', { timeout: 20000 }).should(($el) => {
                const style = $el.attr('style')
                expect(style).to.include('visibility: visible')
                expect(style).to.include('transform: none')
            });

            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click();
            cy.wait(3000);
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click();

            // ************************** SELECCIÓN MODULO DE DATOS DEL NEGOCIO *******************************/
            cy.contains('span', ' Usuarios ', { timeout: 10000 }).click();
            cy.wait(2000);

            // ****************************IMPLEMENTACIÓN DE LA LÓGICA AGREGAR USUARIO *************************/

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

        });
    });
});