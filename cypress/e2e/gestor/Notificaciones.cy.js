import 'cypress-file-upload';

describe('Notificaciones', () => {
    beforeEach('Login', () => {
         cy.LoginGestor();
    })
    function uno(){
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click({force:true});
        cy.contains('mat-option .mdc-list-item__primary-text', 'Campana').should('be.visible').click({force:true});//busca con clase .mdc-list-item__primary-text dentro de un mat option con opcion campana
        cy.get('input[formcontrolname=title]').click({force:true}).type('Hora de las donas',{delay:100});
        //cy.get('#mat-input-1').should('be.visible').click().type('notificacion_1',{delay:100});
        cy.get('textarea[formcontrolname=textNotification]').click({force:true}).type('Hora del cafe',{delay:100});
        cy.contains('URL').should('be.visible').click({force:true}).type('https://www.conceptomovil.com/',{delay:100});
        cy.contains('Siguiente').click({force:true});
    }

    it('Notificaciones', () => {
        cy.viewport(1920, 1080);
 cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        //Agregar notificaciones con giro especificado
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.contains('Notificaciones').click();
        cy.get('body').click(0,0);
        cy.wait(2000);
        cy.contains('Agregar').should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('.mx-0 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('div.cdk-overlay-container mat-option').contains('Electronica y computacion').scrollIntoView().click();
        //cy.get('#mat-mdc-checkbox-1-input').should('be.visible').click();
        cy.contains('Siguiente').should('be.visible').click({force:true});
        uno();
        cy.get('input[formcontrolname="endDate"]').click({force:true}).type('30/01/2026',{delay:100});
        cy.get('input[formcontrolname="endTime"]').invoke('val', '12:30').trigger('change');
        cy.pause();
        cy.contains('Siguiente').click({force:true});
        cy.wait(2000);
        cy.contains('Enviar').click({force:true});
        


        //Agregar notificaciones con personalizado
       /* cy.wait(2000);
        cy.contains('Agregar').should('be.visible').click({force:true});
        cy.get('#mat-mdc-checkbox-2-input').click({force:true});
        cy.get('input[type="file"]').attachFile('Hoja_1.csv', { force: true });
        cy.wait(2000);
        cy.get(':nth-child(2) > .mdc-button--unelevated > .mat-mdc-button-touch-target').click({force:true});
        cy.contains('Siguiente').click({force:true});
        cy.get('#mat-select-value-9 > .mat-mdc-select-placeholder').should('be.visible').click({force:true}).type;
        cy.contains('mat-option .mdc-list-item__primary-text', 'Campana').should('be.visible').click({force:true});
        cy.get('#mat-input-7').click({force:true}).type('Notificacion 2',{delay:100});
        cy.get('#mat-input-8').click({force:true}).type('prueba 2', {delay:100});
        cy.get('#mat-input-12').click({force:true}).type('https://www.conceptomovil.com/');
        cy.contains('Siguiente').click({force:true});
        cy.get('#mat-input-10').click({force:true}).type('10/10/2025',{delay:100});
        cy.get('input[formcontrolname="endTime"]').invoke('val', '12:30').trigger('change');
        cy.pause();
        cy.contains('Siguiente').click({force:true});
        cy.wait(2000);
        cy.contains('Enviar').click({force:true});*/



    })
   

})