import { faker } from '@faker-js/faker';

describe('Casos Usuarios', () => {

    beforeEach('Login', ()=> {
        cy.LoginGestor();
    })
    it('Casos y excecpciones de usuarios', () => {
        cy.viewport(1920, 1080);
        const nombre=faker.person.firstName();
        var paterno=faker.person.lastName();
        paterno=paterno.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '');
        var materno=faker.person.lastName();
        materno=materno.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '');
        const correo=faker.internet.email(nombre);
        const telefono=faker.string.numeric(10);

        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.get(':nth-child(4) > div.ng-star-inserted > .m-1',{timeout: 10000}).should('be.visible').click();
        cy.contains('Usuarios').click();
        cy.get('body').click(0,0);
        cy.wait(1000);
        cy.scrollTo('bottom',{duration: 2000});
        cy.get('.mat-mdc-paginator-navigation-next > .mat-mdc-button-touch-target').should('be.visible').click({force:true});
        //cy.get('.mat-mdc-paginator-navigation-next > .mat-mdc-button-touch-target').should('be.visible').click({force:true});
        
        //ACTIVAR Y DESACTIVAR
        for(let i=0;i<=1;i++)
        {
        cy.get('#mat-mdc-slide-toggle-10-button').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Aceptar').should('be.visible').click({force:true});
        cy.wait(2000);
        }
        //EDITAR
        cy.get(':nth-child(6) > .ps-3 > .mat-icon').click({force:true});
        cy.get('#mat-input-1').click().clear();
        cy.get('#mat-input-1').should('be.visible').click().type(nombre,{delay:100});
        cy.get('#mat-input-2').click().clear();
        cy.get('#mat-input-2').should('be.visible').click().type(paterno,{delay:100});
        cy.get('#mat-input-3').click({force:true}).clear();
        cy.get('#mat-input-3').should('be.visible').click().type(materno, {delay: 100});
        cy.wait(2000);
        cy.get('.mat-mdc-dialog-content').find('input[formcontrolname="phoneNumber"]').click({ force: true }).clear().type('5551234567', { force: true },{delay:100});
        cy.contains('Guardar').should('be.visible').click({force:true});

        //RESTABLECER CONTRASEÑA

        cy.get(':nth-child(6) > .text-center > .mat-icon').should('be.visible').click({force:true});
        //cy.scrollTo('bottom');
        //cy.get('#mat-mdc-dialog-title-11', {timeout: 10000}).should('exist').and('be.visible').click();
        //cy.get('.mat-mdc-dialog-title mdc-dialog__title').scrollTo('bottom');
        cy.wait(2000);
        cy.contains('Aceptar').should('be.visible').click({force:true});    
    })
})