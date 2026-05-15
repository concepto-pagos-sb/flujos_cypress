
describe('Linkdenegocio', () => {

    // ESTE ES UN BUCLE PARA QUE PRIMERO EJECUTE EL LOGIN SIN NECESIDAD DE METERLO EN CADA IT
    beforeEach(() => {
        cy.Loginss(); // 
    })

    it('linkdenegocioExceptions', () => {


        cy.origin('https://dashboard-qa.conceptopagos.com', () => {
            cy.visit('https://dashboard-qa.conceptopagos.com/')

            //Constantes
            const mnsjurl = "Por favor, ingrese solo letras y números, sin espacios, entre 6 y 30 caracteres."

            //Función link de negocio
            //Excepción url
            function urlexcepcion(MiNegocio, mnsjurl) {

                cy.get('input[formcontrolname="nameBusinessLink"]', { timeout: 10000 })
                    .clear().type(MiNegocio, { delay: 100 }).blur()
                cy.get('div.text-danger.ng-star-inserted', { timeout: 10000 }).should('contain', mnsjurl).and('be.visible')
                cy.contains('button.button-primary', 'Guardar').should('be.disabled')
            }

            //VALIDACIÓN DE INGRESO AL DASHBORAD
            cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');  // Verificar que la URL cambió a la correcta
            cy.url().should('include', 'dashboard-qa.conceptopagos.com');


            //*************************** POP UP NOTIFICACION **************************************/
            // pop up 
            /*
            cy.get('mat-dialog-container', { timeout: 20000 }).then(($popupnoti) => {
                if ($popupnoti.length > 0 && $popupnoti.is(':visible')) {
                    cy.get('button.button-primary.px-3.close-button', { timeout: 10000 })
                        //.contains('Más información')
                        .click({ delay: 100 });
                } else {
                    cy.log('No hay pop-up visible');
                }
            });*/

            // **************************** Barra lateral ********************************/
            cy.get('.mat-drawer.mat-sidenav', { timeout: 20000 }).should(($el) => {
                const style = $el.attr('style')
                expect(style).to.include('visibility: visible')
                expect(style).to.include('transform: none')
            })
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            cy.wait(3000)
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()

            //************************** EXCEPCIONES BOTÓN DE PAGO *******************************/
            // MENU LATERAL ( PAGOS A DISTANCIA)
            cy.get('#mat-expansion-panel-header-0').click({ delay: 100 })
            //OPCION DE LINK DE NEGOCIO
            cy.contains('span', 'Link de negocio', { timeout: 10000 }).click()

            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()

            urlexcepcion('pr', mnsjurl)
            urlexcepcion('😉😊😇🥰', mnsjurl)
            urlexcepcion('9}=)(())I', mnsjurl)
            cy.wait(2000)

        });
    }); // FIN IT


    it('LinkNegocioHP', () => {


        cy.origin('https://dashboard-qa.conceptopagos.com', () => {
            cy.visit('https://dashboard-qa.conceptopagos.com/')

            //VALIDACIÓN DE INGRESO AL DASHBORAD
            cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');  // Verificar que la URL cambió a la correcta
            cy.url().should('include', 'dashboard-qa.conceptopagos.com');


            //*************************** POP UP NOTIFICACION **************************************/
            // pop up 
            /*
            cy.get('mat-dialog-container', { timeout: 20000 }).then(($popupnoti) => {
                if ($popupnoti.length > 0 && $popupnoti.is(':visible')) {
                    cy.get('button.button-primary.px-3.close-button', { timeout: 10000 })
                        //.contains('Más información')
                        .click({ delay: 100 });
                } else {
                    cy.log('No hay pop-up visible');
                }
            });*/

            // **************************** Barra lateral ********************************/
            cy.get('.mat-drawer.mat-sidenav', { timeout: 20000 }).should(($el) => {
                const style = $el.attr('style')
                expect(style).to.include('visibility: visible')
                expect(style).to.include('transform: none')
            })
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            cy.wait(3000)
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            //******************** ACCESO A MODULO LINK DE NEGOCIO ******************/

            // MENU LATERAL ( PAGOS A DISTANCIA)
            cy.get('#mat-expansion-panel-header-0').click({ delay: 100 })
            //OPCION DE LINK DE NEGOCIO
            cy.contains('span', 'Link de negocio', { timeout: 10000 }).click()
            // CERRAR BARRA LATERAL
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()


            //************************** LINK DE NEGOCIO HAPPY PATH*******************************/

            // INPUT NOMBRE DEL NEGOCIO
            cy.get('input[formcontrolname="nameBusinessLink"]', { timeout: 10000 })
                .type('jardindealofloreia', { delay: 100 })
            // DESCRIPCIÓN
            cy.get('textarea[formcontrolname="descriptionBusinessLink"]')
                .type('🌸 Jardín de Alo 🌿 Tu rincón floral lleno de amor y color. 💐 Ramos únicos, detalles con alma y aromas que enamoran. 🎁✨ ¡Regala naturaleza, regala alegría! 🌷🌼 #FloresConEncanto', { delay: 100 })
            //TELÉFONO
            cy.get('#mat-mdc-slide-toggle-1').click()
            // DIRECCIÓN
            cy.get('#mat-mdc-slide-toggle-2').click()
            //GUARDAR  
            cy.contains('button.button-primary', 'Guardar').should('be.visible')
                .click({ delay: 200 })
            cy.wait(2000)


        })
    }); //IT HP

    it('LinkNegocioOpciones', () => {


        cy.origin('https://dashboard-qa.conceptopagos.com', () => {
            cy.visit('https://dashboard-qa.conceptopagos.com/')

            //VALIDACIÓN DE INGRESO AL DASHBORAD
            cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');  // Verificar que la URL cambió a la correcta
            cy.url().should('include', 'dashboard-qa.conceptopagos.com');


            //*************************** POP UP NOTIFICACION **************************************/
            // pop up 
            /*
            cy.get('mat-dialog-container', { timeout: 20000 }).then(($popupnoti) => {
                if ($popupnoti.length > 0 && $popupnoti.is(':visible')) {
                    cy.get('button.button-primary.px-3.close-button', { timeout: 10000 })
                        //.contains('Más información')
                        .click({ delay: 100 });
                } else {
                    cy.log('No hay pop-up visible');
                }
            });*/

            // **************************** Barra lateral ********************************/
            cy.get('.mat-drawer.mat-sidenav', { timeout: 20000 }).should(($el) => {
                const style = $el.attr('style')
                expect(style).to.include('visibility: visible')
                expect(style).to.include('transform: none')
            })
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            cy.wait(3000)
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            //******************** ACCESO A MODULO LINK DE NEGOCIO ******************/

            // MENU LATERAL ( PAGOS A DISTANCIA)
            cy.get('#mat-expansion-panel-header-0').click({ delay: 100 })
            //OPCION DE LINK DE NEGOCIO
            cy.contains('span', 'Link de negocio', { timeout: 10000 }).click()
            // CERRAR BARRA LATERAL
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()

            //OPCIONES DE LINK DE NEGOCIO
            //BOTON COPIAR
            cy.contains('button', 'Copiar')
                .click({ delay: 100 });
            cy.wait(3000)
            // BOTON WHATSAPP
            cy.contains('button', 'WhatsApp')
                .click({ delay: 100 });
            cy.wait(3000)
            // BOTON FACEBOOK
            cy.contains('button', 'Facebook')
                .click({ delay: 100 })
            cy.wait(3000)
            // BOTON CORREO
            cy.contains('button', 'Correo')
                .click({ delay: 100 })
            cy.wait(3000)


        })

    }); // FIN IT OPCIONES

    it('LinkNegocioEditar', () => {


        cy.origin('https://dashboard-qa.conceptopagos.com', () => {
            cy.visit('https://dashboard-qa.conceptopagos.com/')

            //VALIDACIÓN DE INGRESO AL DASHBORAD
            cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');  // Verificar que la URL cambió a la correcta
            cy.url().should('include', 'dashboard-qa.conceptopagos.com');

            
            //*************************** POP UP NOTIFICACION **************************************/
            // pop up 
            /*
            cy.get('mat-dialog-container', { timeout: 20000 }).then(($popupnoti) => {
                if ($popupnoti.length > 0 && $popupnoti.is(':visible')) {
                    cy.get('button.button-primary.px-3.close-button', { timeout: 10000 })
                        //.contains('Más información')
                        .click({ delay: 100 });
                } else {
                    cy.log('No hay pop-up visible');
                }
            });*/

            // **************************** Barra lateral ********************************/
            cy.get('.mat-drawer.mat-sidenav', { timeout: 20000 }).should(($el) => {
                const style = $el.attr('style')
                expect(style).to.include('visibility: visible')
                expect(style).to.include('transform: none')
            })
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            cy.wait(3000)
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            //******************** ACCESO A MODULO LINK DE NEGOCIO ******************/

            // MENU LATERAL ( PAGOS A DISTANCIA)
            cy.get('#mat-expansion-panel-header-0').click({ delay: 100 })
            //OPCION DE LINK DE NEGOCIO
            cy.contains('span', 'Link de negocio', { timeout: 10000 }).click()
            // CERRAR BARRA LATERAL
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()

            //EDITAR
            cy.contains('button', 'Editar')
                .click({ delay: 100 })
            cy.wait(3000)
            //CANCELAR EDICIÓN DE LINK DE NEGOCIO
            cy.contains('button', 'Cancelar')
                .click({ delay: 100 })
            cy.wait(3000)

            cy.contains('button', 'Editar')
                .click({ delay: 100 })
            cy.wait(5000)
            //URL 
            cy.get('input[formcontrolname="nameBusinessLink"]', { timeout: 20000 })
                .clear()
                .type('jardindealofloreriacentral');
            //DESCRIPCIÓN
            cy.get('textarea[formcontrolname="descriptionBusinessLink"]', { timeout: 20000 })
                .clear()
                .type('🌸 Jardín de Alo 🌿 | Ramos frescos y personalizados 🌷✨ Cada arreglo cuenta una historia única 💐 Regala color, amor y frescura en cada pétalo 🎁 ¡Haz tu día especial con nuestras flores! 🌼 #FloresQueEnamoran 🌺')
            //TELÉFONO
            cy.get('#mat-mdc-slide-toggle-5', { timeout: 20000 }).click()
            // DIRECCIÓN
            cy.get('#mat-mdc-slide-toggle-6', { timeout: 20000 }).click()
            

            cy.contains('button', 'Guardar')
                .click({ delay: 100 })
            cy.wait(3000)




        })

    }); // FIN IT EDITAR

    it('LinkNegocioEditarExcepciones', () => {


        cy.origin('https://dashboard-qa.conceptopagos.com', () => {
            cy.visit('https://dashboard-qa.conceptopagos.com/')

            //VALIDACIÓN DE INGRESO AL DASHBORAD
            cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');  // Verificar que la URL cambió a la correcta
            cy.url().should('include', 'dashboard-qa.conceptopagos.com');

            
            //*************************** POP UP NOTIFICACION **************************************/
            // pop up 
            /*
            cy.get('mat-dialog-container', { timeout: 20000 }).then(($popupnoti) => {
                if ($popupnoti.length > 0 && $popupnoti.is(':visible')) {
                    cy.get('button.button-primary.px-3.close-button', { timeout: 10000 })
                        //.contains('Más información')
                        .click({ delay: 100 });
                } else {
                    cy.log('No hay pop-up visible');
                }
            });*/

            // **************************** Barra lateral ********************************/
            cy.get('.mat-drawer.mat-sidenav', { timeout: 20000 }).should(($el) => {
                const style = $el.attr('style')
                expect(style).to.include('visibility: visible')
                expect(style).to.include('transform: none')
            })
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            cy.wait(3000)
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()
            //******************** ACCESO A MODULO LINK DE NEGOCIO ******************/

            // MENU LATERAL ( PAGOS A DISTANCIA)
            cy.get('#mat-expansion-panel-header-0').click({ delay: 100 })
            //OPCION DE LINK DE NEGOCIO
            cy.contains('span', 'Link de negocio', { timeout: 10000 }).click()
            // CERRAR BARRA LATERAL
            cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click()

            //EDITAR EXCEPCIONES
            cy.contains('button', 'Editar')
                .click({ delay: 100 })
            cy.wait(3000)

            //URL 
            cy.get('input[formcontrolname="nameBusinessLink"]', { timeout: 20000 })
                .clear()
                .type('🌸0i$%$%')
            cy.get('p.message-link-exists')
                .contains('Por favor, ingrese solo letras y números, sin espacios, entre 6 y 30 caracteres.')
                .should('be.visible');
            //DESCRIPCIÓN
            cy.get('textarea[formcontrolname="descriptionBusinessLink"]', { timeout: 20000 })
                .clear()          
                .should('have.value', '') 
                .blur();          
            cy.get('mat-error')
                .contains('Campo inválido')
                .should('be.visible')
            //TELÉFONO
            cy.get('#mat-mdc-slide-toggle-5', { timeout: 20000 }).click()
            // DIRECCIÓN
            cy.get('#mat-mdc-slide-toggle-6', { timeout: 20000 }).click()

            //CANCELAR EDICIÓN DE LINK DE NEGOCIO
            cy.contains('button', 'Cancelar')
                .click({ delay: 100 })
            cy.wait(3000)

        })

    }); // FIN IT EDITAR EXCEPCIONES


}); // FIN DESCRIBE