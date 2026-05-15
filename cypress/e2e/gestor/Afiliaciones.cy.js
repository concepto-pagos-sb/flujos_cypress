import { faker } from '@faker-js/faker';

describe('Afiliaciones', ()=> {
    
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Afiliaciones', ()=>{
        
        const nombreAleatorio = faker.person.firstName();
        const numero=faker.number.int();
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.wait(3000);
        cy.contains('Operacion').click({force:true});
        cy.contains('Afiliaciones').should('be.visible').click({force:true});
        cy.get('body').should('be.visible').click(0,0);
        //Consulta afiliaciones por numero de afiliacion
        cy.get('input[formcontrolname=affiliation_number]').click({force:true}).type('ASCW3243');
        cy.scrollTo('top');
        cy.get('.bg-primary > .mdc-button__label').as('boton_buscar');
        cy.get('@boton_buscar').click({force:true});
        cy.wait(4000);
        //consulta afiliaciones ppor producto
        cy.get('.button-search > .mat-mdc-tooltip-trigger').click({force:true});
        cy.wait(2000);
        cy.get('.mat-mdc-select-placeholder').click({force:true});
        cy.wait(2000);
        cy.get('mat-option').contains('Link de pago').click({force:true});
        cy.get('@boton_buscar').click({force:true});
        cy.wait(4000);
        //Agregar  afiliaciones
        cy.contains('Agregar').click({force:true});
        cy.get('input[formcontrolname=affiliation_number]').eq(1).click({force:true}).type(numero);
        cy.wait(2000);
        cy.get('.mat-mdc-select-placeholder').eq(1).click({force:true});
        cy.get('mat-option').contains('Esquema 3').click({force:true});
        cy.get('.mat-mdc-select-placeholder').eq(2).click({force:true});
        cy.get('mat-option').contains('Si').click({force:true});
        cy.get('mat-select[formcontrolname=acquiring_bank_id]').click({force:true});
        cy.get('mat-option').contains('Banregio').click({force:true});
        cy.get('mat-select[formcontrolname=product_id]').click({force:true});
        cy.get('mat-option').contains('Ecommerce').click({force:true});
        cy.get('input[formcontrolname=affiliated]').click({foce:true}).type('Comercios');
        cy.get('input[formcontrolname=description]').click({force:true}).type('Holiwis');
        cy.get('mat-select[formcontrolname="three_ds_config_id"]').click({force:true});
        cy.get('mat-option').contains('concepto_pagos3002').click({force:true});

        cy.contains('Guardar').click({force:true});





    })
})