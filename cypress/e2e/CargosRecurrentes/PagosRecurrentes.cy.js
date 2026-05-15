/// <reference types="cypress" />

describe('Pagos Recurrentes - Semanales, Quincenales y Mensuales', () => {

  /**
   * Ejecuta el flujo de creación de un pago recurrente.
   * @param opciones.radioSelector      Selector del input radio (ej: '#mat-radio-2-input')
   * @param opciones.rangoPeriodicidad  Rango de periodicidad permitido (ej: 4, 2, 8)
   * @param opciones.repetirConDuracion true para duración definida, false para indefinida
   * @param opciones.excepciones Para ingresar datos erróneos
   */
  function flujoPago({
    radioSelector,
    rangoPeriodicidad,
    repetirConDuracion = true,
    excepciones = false,
  }) {
    cy.Loginss();

    cy.visit('https://dashboard-qa.conceptopagos.com/');
    cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');
    cy.url().should('include', 'dashboard-qa.conceptopagos.com');

    /*
    // Valida que haya un pop up
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

    // Función auxiliar para validar campo inválido
    function validarCampoInvalido() {
      cy.get('span.error-text')
        .should('be.visible')
        .and('contain.text', 'Campo inválido');
    }

    function validarCantidadInvalida(){
      cy.get('span.error-text')
          .should('be.visible')
          .and('contain.text', 'El monto ingresado debe ser mayor o igual a $5 y menor o igual a $10,000');//poner expresion regular en los montos
    }

    // Datos aleatorios
    const cantidad = Cypress._.random(5, 10000);
    const numero = Cypress._.random(2, 10);
    const textoConcepto = `concepto prueba ${numero}`;
    const textoDescripcion = `descripción prueba ${numero}`;

    if (!excepciones) {
      cy.get('input[formcontrolname="amount"]').clear().type(cantidad.toString(), { delay: 200 });
      cy.get('input[formcontrolname="concept"]').clear().type(textoConcepto, { delay: 200 });

      cy.get(radioSelector).check();

      const valorPeriodicidad = Cypress._.random(1, rangoPeriodicidad);
      cy.get('select[formcontrolname="periodicity_option"]').select(valorPeriodicidad.toString(), { delay: 200 });

      if (repetirConDuracion) {
        cy.get('#mat-radio-7-input').check();
        cy.get('input[formcontrolname="duration_number"]').clear().type(numero.toString(), { delay: 200 });
      }

      cy.get('textarea[formcontrolname="description"]').clear().type(textoDescripcion, { delay: 200 });

      cy.get('button[type="submit"].button-primary.buttons-schedule')
        .should('not.be.disabled')
        .click();

      cy.wait(2000);
      cy.get('div.mat-mdc-dialog-surface.mdc-dialog__surface').should('be.visible');

      cy.get('img[alt="Copy"]').click({delay:500});
      cy.wait(1500)
      cy.get('img[alt="WhatsApp"]').click({delay:500});
      cy.wait(1500)
      cy.get('img[alt="Facebook"]').click({delay:500});
      cy.wait(1500)
      cy.get('img[alt="Email"]').click({delay:500});
      cy.wait(1500)


    }

    if (excepciones) {
      const cantidadLetras = "hola";
      const cantidadMenor= 10;
      const cantidadMayor=7000000;
      const campoErroneo = "#$%&";
      const numeroErroneo = 1;

      cy.get('input[formcontrolname="amount"]').clear().type(cantidadLetras, { delay: 200 }).blur();
      validarCampoInvalido();
      cy.wait(1000)
      
      cy.get('input[formcontrolname="amount"]').clear().type(cantidadMenor.toString(), { delay: 200 }).blur();
      validarCantidadInvalida()
      cy.wait(1000)

      cy.get('input[formcontrolname="amount"]').clear().type(cantidadMayor.toString(), { delay: 200 }).blur();
      validarCantidadInvalida()
      cy.wait(1000)

      cy.get('input[formcontrolname="concept"]').clear().blur();
      validarCampoInvalido();
      cy.wait(1000)

      cy.get(radioSelector).check();

      if (repetirConDuracion) {
        cy.get('#mat-radio-7-input').check();
        cy.get('input[formcontrolname="duration_number"]').clear().type(campoErroneo, { delay: 200 }).blur();
        validarCampoInvalido();

        cy.wait(1000);
        cy.get('input[formcontrolname="duration_number"]').clear().type(numeroErroneo.toString(), { delay: 200 }).blur();
        cy.get('span.error-text')
          .should('be.visible')
          .and('contain.text', 'El número debe ser mayor o igual a 2');
      }

      cy.get('textarea[formcontrolname="description"]').clear().blur();
      validarCampoInvalido();

      cy.get('button[type="submit"].button-primary.buttons-schedule')
        .should('be.disabled');
    }
  }

  // Escenarios para cada tipo de frecuencia y duración
  const escenarios = [
    
    {
      titulo: 'Excepciones pago',
      args: {
        radioSelector: '#mat-radio-4-input',
        rangoPeriodicidad: 8,
        repetirConDuracion: true,
        excepciones: true,
      },
    },
    {
      titulo: 'Pago mensual con duración determinada',
      args: {
        radioSelector: '#mat-radio-2-input',
        rangoPeriodicidad: 4,
        repetirConDuracion: false,
        excepciones: false,
      },
    },
    {
      titulo: 'Pago mensual con duración indeterminada',
      args: {
        radioSelector: '#mat-radio-2-input',
        rangoPeriodicidad: 4,
        repetirConDuracion: true,
        excepciones: false,
      },
    },
    {
      titulo: 'Pago quincenal con duración determinada',
      args: {
        radioSelector: '#mat-radio-3-input',
        rangoPeriodicidad: 2,
        repetirConDuracion: false,
        excepciones: false,
      },
    },
    {
      titulo: 'Pago quincenal con duración indeterminada',
      args: {
        radioSelector: '#mat-radio-3-input',
        rangoPeriodicidad: 2,
        repetirConDuracion: true,
        excepciones: false,
      },
    },
    {
      titulo: 'Pago semanal con duración determinada',
      args: {
        radioSelector: '#mat-radio-4-input',
        rangoPeriodicidad: 8,
        repetirConDuracion: false,
        excepciones: false,
      },
    },
    {
      titulo: 'Pago semanal con duración indeterminada',
      args: {
        radioSelector: '#mat-radio-4-input',
        rangoPeriodicidad: 8,
        repetirConDuracion: true,
        excepciones: false,
      },
    },
  ];

  // Crear los tests dinámicamente
  escenarios.forEach(({ titulo, args }) => {
    it(`Flujo completo - ${titulo}`, () => {
      flujoPago(args);
      cy.wait(2500);
    });
  });
});

