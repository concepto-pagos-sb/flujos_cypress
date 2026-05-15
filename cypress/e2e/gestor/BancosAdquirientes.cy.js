import { faker } from '@faker-js/faker';

describe('Formulario de Bancos Adquirientes', () => {

     beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Bancos adquirientes ', () => {
        const numero=faker.number.int({min:1000,max:9999});
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.viewport(1920, 1080);
        cy.get('body').click(23.99,23.99);
        cy.wait(3000);
        cy.contains('Operacion').click({force:true});
        cy.contains('Bancos adquirentes').click({force:true});
        cy.get('body').click(0,0);
        cy.get('input[formcontrolname="bank"]').click({force:true}).type('banco 12',{delay:100});
        cy.contains('Buscar').click({force:true});
        cy.wait(2000);
        cy.get('button[aria-label="Limpiar filtros"]').click({force:true});
        //Agregar Banco//
        cy.contains('button','Agregar banco').click({force:true});
        cy.get('input[formcontrolname="name"]').click().type(`banco ${numero}`,{delay:100});
        cy.get('input[formcontrolname="fiid"]').click().type(numero,{delay:100});
        cy.contains('Guardar').click({force:true});







    });
});
