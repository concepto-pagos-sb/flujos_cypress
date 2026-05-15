import { faker, tr } from '@faker-js/faker';

describe('Navegacion Roles', ()=> {
    
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Roles y Permisos', ()=>{
        
        const nombreAleatorio = faker.person.firstName();
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.contains('Roles y permisos').click({force:true});
        cy.get('body').should('be.visible').click(0,0);
        cy.contains('Agregar rol',{timeout:10000}).should('exist').should('be.visible').click({force:true});
        //cy.get('.mat-mdc-focus-indicator').eq(1).click({force:true});
        cy.get('input[formcontrolname=roleName]').click({force:true}).type('prueba de '+nombreAleatorio,{delay:100,force:true});
        cy.get('#mat-mdc-checkbox-1-input').parent().should('be.visible').click();
        cy.wait(1000);
        cy.get('#mat-mdc-checkbox-3-input').parent().should('be.visible').click();
        cy.wait(1000);
        cy.get('#mat-mdc-checkbox-5-input').parent().should('be.visible').click();
        cy.wait(1000);
        cy.get('#mat-mdc-checkbox-2-input').parent().should('be.visible').click();
        cy.wait(1000);
        cy.get('#mat-mdc-checkbox-4-input').parent().should('be.visible').click();
        cy.wait(1000);
        cy.get('#mat-mdc-checkbox-6-input').parent().should('be.visible').click();
        cy.wait(1000);
        cy.get('.btn-primary > .mat-mdc-button-touch-target').should('be.visible').click({force:true});
        cy.wait(1000);
        cy.scrollTo('top');
        cy.wait(5000);
        cy.get('.btn-outline > .mat-mdc-button-touch-target').should('exist').click({force:true});
        cy.wait(1000);
        cy.get('.mat-mdc-form-field-infix input', {timeout: 5000}).should('be.visible').click().type(`Rol prueba 3 " " - " -> `,{delay:100});//caracteres no validos

        cy.get('.btn-primary > .mat-mdc-button-touch-target').should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('.mat-mdc-form-field-infix input', {timeout: 10000}).should('be.visible').clear().type('Rol prueba 3',{delay:100});//sin seleccionar ningun campo
        //cy.get('.mat-mdc-form-field-infix').click().type(`Rol prueba 3`,{delay:100});//sin seleccionar permisos
        cy.get('.btn-primary > .mat-mdc-button-touch-target').should('be.visible').click({force:true});
        //duplicado
        cy.get('.mat-mdc-form-field-infix input', {timeout: 10000}).should('be.visible').clear().type('Rol de parche',{delay:100});
        cy.wait(1000);
        cy.get('mat-checkbox.mat-accent label.mdc-label').contains('Inicio').click({ force: true });//chechbox seleccion
        cy.get('.btn-primary > .mat-mdc-button-touch-target').should('be.visible').click({force:true});
        cy.wait(3000);
        //
        cy.contains('Cancelar').click({force:true});

        cy.get('button[role="switch"][aria-checked="true"]').eq(0).click({force:true});
        cy.contains('Aceptar').click({force:true});
        cy.wait(3000);
        cy.get('button[role="switch"][aria-checked="false"]').eq(0).click({force:true});
        cy.contains('Aceptar').click({force:true});


    })
})