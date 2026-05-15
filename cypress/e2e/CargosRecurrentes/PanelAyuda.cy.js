describe('Panel de Ayuda', () => {

    it('Panel de Ayuda', () => {
        cy.Loginss();

        cy.origin(
            'https://dashboard-qa.conceptopagos.com',
            { args: {} },
            () => {
                cy.visit('/');

                cy.location('origin', { timeout: 2000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');
                cy.url().should('include', 'dashboard-qa.conceptopagos.com');

                /*
                cy.get('mat-dialog-container', { timeout: 20000 }).then(($popup) => {
                    if ($popup.length && $popup.is(':visible')) {
                        cy.get('button.button-primary.px-3.close-button')
                            .contains('Más info')
                            .click({ delay: 100 });
                    }
                }); */

                

                cy.get('.mat-drawer.mat-sidenav').should(($el) => {
                    const style = $el.attr('style');
                    expect(style).to.include('visibility: visible');
                    expect(style).to.include('transform: none');
                });

                cy.get('.mat-icon.icon-menu').click({ delay: 200 });
                cy.wait(3000);
                cy.get('.mat-icon.icon-menu').click({ delay: 200 });

                // Navegar al Panel de Ayuda
                cy.contains('span', 'Ayuda').click({ delay: 200 });
                cy.wait(2000);

                cy.contains('mat-icon', 'menu').click();
                cy.wait(2000);

                cy.contains('h2', 'Ir al centro de conocimiento').click();

                cy.wait(2000);

                cy.contains('h5', 'Envíanos un WhatsApp').should('be.visible');

                cy.wait(3000);

                cy.contains('button', 'Iniciar conversación').click();

                cy.wait(3000);

                 cy.get('a[href="mailto:soporte@cmpagos.com"]').click({ force: true })

                cy.wait(3000);

                cy.contains('button', 'Llamar').click();

                 cy.wait(3000);

                cy.contains('button', 'Iniciar chat').click();

                cy.wait(8000);

            })
    })
})