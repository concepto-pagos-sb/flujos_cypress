import { faker } from '@faker-js/faker';

describe('Perfile transaccionales', ()=> {
    
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Perfiles transaccionales', ()=>{
        
        const nombreAleatorio = faker.person.firstName();
        const nombre2=faker.person.firstName();
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.contains('Perfiles transaccionales').should('be.visible').click({force:true});
        cy.get('body').should('be.visible').click(0,0);
        cy.contains('Agregar').should('be.visible').click({force:true});
        cy.get('mat-checkbox[formcontrolname=SELL] label').click({force:true});
        cy.wait(1000);
        cy.get('input[formcontrolname=name]').click({force:true}).type('perfil de '+ nombreAleatorio,{delay:100});
        cy.contains('Guardar').click({force:true});
        //excepciones agregar perfiles duplicados
        cy.wait(3000);
        cy.contains('Agregar').should('be.visible').click({force:true});
        cy.get('mat-checkbox[formcontrolname=SELL] label').click({force:true});
        cy.wait(1000);
        cy.get('input[formcontrolname=name]').click({force:true}).type('PerfilBR',{delay:100});
        cy.contains('Guardar').click({force:true});
        cy.wait(2000);
        cy.contains('Cancelar').click({force:true});
        //excepciones agregar perfil sin seleccionar opcion
        cy.wait(1000);
        cy.contains('Agregar').should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('input[formcontrolname=name]').click({force:true}).type('perfil de '+ nombreAleatorio,{delay:100});
        cy.contains('Guardar').click({force:true});
        cy.scrollTo('bottom');
        


    })
})
