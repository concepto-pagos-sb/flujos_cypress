describe('Terminales', () => {
    beforeEach(() => {
        cy.LoginGestor();
    });

    it('Flujo para dar de alta un modelo o terminal Happy Path', () => {

        const numeroSerie = "655432217"

        const Link = 'https://auth-qa.conceptopagos.com/sso/realms/Gestor/protocol/openid-connect/auth?client_id=Client_Gestor&redirect_uri=https%3A%2F%2Fgestor-qa.conceptopagos.com%2Fmerchants%2Fadd-client&state=415ef774-b0f9-4624-8368-34320b7a6c44&response_mode=fragment&response_type=code&scope=openid&nonce=8cc1643f-298d-4d93-9e1e-b782624bd579&code_challenge=tMHFzgAs9rHOQcMxamv8jW8CCuS6vPgXQmWtniQgErg&code_challenge_method=S256';

        cy.visit(Link);

        cy.contains('mat-label.m-3', 'Terminales')
            .click();

        cy.get('[tabindex="0"] > [role="group"] > :nth-child(1) > .mat-tree-node')
            .should('be.visible')
            .click()
            .then(($el) => {
                cy.wrap($el).invoke('blur');
            });

        cy.get('body').trigger('mousemove', { clientX: 2000, clientY: 0 });
        cy.get('body').trigger('mouseout');

        cy.get('main, .mat-drawer-content, .cdk-overlay-backdrop')
            .first()
            .click({ force: true });

        cy.get('.mat-drawer-inner-container').scrollTo(0, 100);

        cy.get('mat-form-field').contains('Número de serie').click();
        cy.get('[formcontrolname="serialNumber"]').type(numeroSerie, { force: true });

        cy.contains('button', 'Buscar').click();

        cy.wait(4000)

        cy.get('mat-icon').contains('refresh').click();

        cy.get('#mat-select-value-3 > .mat-mdc-select-placeholder').click();

        cy.get('#mat-option-4').click()

        cy.contains('button', 'Buscar').click();

        cy.wait(4000)

        cy.get('mat-icon').contains('refresh').click();

        cy.get('#mat-select-value-3 > .mat-mdc-select-placeholder').click();

        cy.get('#mat-option-5').click()

        cy.contains('button', 'Buscar').click();

        cy.wait(4000)

        cy.get('mat-icon').contains('refresh').click();

        cy.get('#mat-select-value-5 > .mat-mdc-select-placeholder').click()

        cy.get('#mat-option-2').click()

        cy.contains('button', 'Buscar').click();

        cy.wait(4000)

        cy.get('mat-icon').contains('refresh').click();

        cy.get('#mat-select-value-5 > .mat-mdc-select-placeholder').click()

        cy.get('#mat-option-3').click()

        cy.contains('button', 'Buscar').click();

        cy.wait(4000)




    })

})
