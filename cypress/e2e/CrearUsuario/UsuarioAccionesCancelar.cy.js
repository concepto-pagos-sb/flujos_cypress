describe('UsuarioAccionesCancelar', () => {

    // URL de autenticación usando Keycloak con todos los parámetros necesarios (OIDC)
    const Link = 'https://auth-qa.conceptopagos.com/sso/realms/CMmobile/protocol/openid-connect/auth?client_id=Client_Front_Portal&redirect_uri=https%3A%2F%2Fdashboard-qa.conceptopagos.com%2Fprofile&state=0eaef5fc-cd72-47e4-9895-9ce59cd19e37&response_mode=fragment&response_type=code&scope=openid&nonce=de7e957a-88e9-4e40-ae8d-a789c7d65f5f&code_challenge=oXaj1JMRN5HCDuzojQK4ebPBfiUQUSRbG03q1JTOjjs&code_challenge_method=S256'

    // Antes de cada prueba se visita la URL de inicio de sesión
    beforeEach(() => {
        cy.visit(Link);
    });

    it('Valida que muestre "campo invalido" al ingresar un nombre no valido', () => {

        // Inicia sesión usando un comando personalizado (debe estar definido en support/commands.js)
        cy.Login();

        // Cambia de origen para poder interactuar con el dashboard tras el login (Cypress restriction)
        cy.origin('https://dashboard-qa.conceptopagos.com', () => {

            // Verifica que la URL de origen sea correcta tras login exitoso
            cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');
            cy.url().should('include', 'dashboard-qa.conceptopagos.com');

            // ***************** POP-UP DE NOTIFICACIÓN (si aparece) ********************
            cy.get('mat-dialog-container', { timeout: 20000 }).then(($popupnoti) => {
                // Si el pop-up es visible, hace clic en el botón "Más info"
                if ($popupnoti.length > 0 && $popupnoti.is(':visible')) {
                    cy.get('button.button-primary.px-3.close-button', { timeout: 10000 })
                        .contains('Más info')
                        .click({ delay: 100 });
                } else {
                    // Si no aparece el pop-up, escribe en el log
                    cy.log('No hay pop-up visible');
                }
            });

            // ***************** VALIDACIÓN Y USO DEL MENÚ LATERAL **********************
            cy.get('.mat-drawer.mat-sidenav', { timeout: 20000 }).should(($el) => {
                const style = $el.attr('style')
                // Asegura que el menú lateral está visible y desplegado (sin transform)
                expect(style).to.include('visibility: visible')
                expect(style).to.include('transform: none')
            });

            // Abre y cierra el menú lateral para asegurar que funciona
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click();
            cy.wait(3000); // ⚠️ Mejor reemplazar con un `.should()` dinámico
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click();

            // *************** NAVEGAR AL MÓDULO "Usuarios" *****************************
            cy.contains('span', ' Usuarios ', { timeout: 10000 }).click();
            cy.wait(2000); // ⚠️ Considerar usar `cy.get(...).should('be.visible')` en vez de `wait`

            // *************** ACCIONES SOBRE UN USUARIO (Eliminar) *********************

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

        });
    });
});
