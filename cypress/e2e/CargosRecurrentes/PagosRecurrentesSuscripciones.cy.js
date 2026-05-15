/// <reference types = "cypress"/>

describe('Suscripciones', () => {

  it('Flujo de suscripciones para consultar por suscripción', () => {
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
        });*/

        cy.get('.mat-drawer.mat-sidenav').should(($el) => {
          const style = $el.attr('style');
          expect(style).to.include('visibility: visible');
          expect(style).to.include('transform: none');
        });

        cy.get('.mat-icon.icon-menu').click({ delay: 200 });
        cy.wait(3000);
        cy.get('.mat-icon.icon-menu').click({ delay: 200 });

        //Crear un registro

        // Navegar a Pagos Recurrentes
        cy.contains('span', 'Pagos a Distancia').click({ delay: 200 });
        cy.wait(2000);
        cy.get('a[href="/remote-payments/recurring-payments"]').click({ delay: 200 });

        // Datos aleatorios
        const cantidad = Cypress._.random(500, 2000);
        const numero = Cypress._.random(2, 10);
        const textoConcepto = `prueba de consulta ${numero}`;
        const textoDescripcion = `prueba flujo de consulta ${numero}`;

        cy.get('input[formcontrolname="amount"]').clear().type(cantidad.toString(), { delay: 200 });
        cy.get('input[formcontrolname="concept"]').clear().type(textoConcepto, { delay: 200 });

        cy.get("#mat-radio-2-input").check();

        const valorPeriodicidad = Cypress._.random(1, 4);
        cy.get('select[formcontrolname="periodicity_option"]').select(valorPeriodicidad.toString(), { delay: 200 });

        cy.get('textarea[formcontrolname="description"]').clear().type(textoDescripcion, { delay: 200 });

        cy.get('button[type="submit"].button-primary.buttons-schedule')
          .should('not.be.disabled')
          .click();

        cy.contains('mat-icon', 'clear').click();


        //Consultar un registro
        cy.contains('span', 'Suscripciones').click();
        cy.wait(2000);
        cy.contains('mat-icon', 'menu').click();
        cy.wait(2000);


        // Escribe en el input
        cy.get('input[placeholder="Nombre de la suscripción"]')
          .type(textoConcepto, { delay: 250 });

        cy.wait(2000)
        // Da clic en el botón "Consultar"
        cy.get('button.consultar-button').click();

        cy.wait(5000)

        cy.contains('th', 'Suscripción').should('be.visible');

        cy.wait(2000)

        cy.contains('mat-icon', 'refresh').click();

        cy.wait(2000)

        cy.get('select[formcontrolname="startDate"]').select('Julio 2025');

        cy.wait(2000)

        cy.get('button.consultar-button').click();

        cy.wait(5000)

        cy.get('select[formcontrolname="startDate"]').select('Mayo 2025');

        cy.wait(2000)

        cy.get('button.consultar-button').click();

        cy.wait(5000)

        cy.contains('th', 'Suscripción').should('be.visible');

        cy.wait(2000)


      }
    );
  });

  it('Flujo de Suscripciones para compartir', () => {
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
        });*/

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

        cy.contains('span', 'Suscripciones').click();
        cy.wait(2000);
        cy.contains('mat-icon', 'menu').click();

        cy.wait(2000);
        cy.contains('mat-icon', 'more_vert').first().click();
        cy.wait(2000);

        cy.contains('a', 'Compartir').click();

        cy.get('img[alt="Copy"]').click({ delay: 500 });
        cy.wait(2000);
        cy.get('img[alt="WhatsApp"]').click({ delay: 500 });
        cy.wait(2000);
        cy.get('img[alt="Facebook"]').click({ delay: 500 });
        cy.wait(2000);
        cy.get('img[alt="Email"]').click({ delay: 500 });
        cy.wait(2000);

        cy.contains('mat-icon', 'clear').click();
      }
    );
  });

  it('Flujo de suscripciones para elminiar', () => {
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
        });*/

        cy.get('.mat-drawer.mat-sidenav').should(($el) => {
          const style = $el.attr('style');
          expect(style).to.include('visibility: visible');
          expect(style).to.include('transform: none');
        });

        cy.get('.mat-icon.icon-menu').click({ delay: 200 });
        cy.wait(3000);
        cy.get('.mat-icon.icon-menu').click({ delay: 200 });

        cy.contains('span', 'Pagos a Distancia').click({ delay: 200 });
        cy.wait(2000);
        cy.get('a[href="/remote-payments/recurring-payments"]').click({ delay: 200 });
        cy.wait(2000);

        cy.contains('span', 'Suscripciones').click();
        cy.wait(2000);
        cy.contains('mat-icon', 'menu').click();
        cy.wait(2000);
        cy.contains('mat-icon', 'more_vert').first().click();
        cy.wait(2000);

        cy.contains('a', 'Desactivar').click();

        cy.contains('span.mdc-button__label', 'Cancelar').click();

        cy.contains('mat-icon', 'more_vert').first().click();
        cy.wait(2000);

        cy.contains('a', 'Desactivar').click();

        cy.contains('span.mdc-button__label', 'Desactivar').click();

      }
    );
  });

});


