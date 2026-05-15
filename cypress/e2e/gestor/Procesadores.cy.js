import { faker, tr } from '@faker-js/faker';

describe('Procesadores', ()=> {
    
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Procesadores', ()=>{
        
        const nombreAleatorio = faker.person.firstName();
        //const nombre2=faker.person.firstName();
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.contains('Procesadores').should('be.visible').click({force:true});
        cy.get('body').should('be.visible').click(0,0);
        cy.contains('Agregar').click({force:true});
        cy.get('mat-checkbox[formcontrolname="id_medio_allow"] label').click({force:true});
        cy.get('input[formcontrolname=name]').click({force:true}).type('procesador de '+nombreAleatorio,{force:true});
        cy.wait(1000);
        cy.contains('Guardar').click({force:true});
        //Excepciones agregar procesador duplicado
        cy.contains('Agregar').click({force:true});
        cy.get('mat-checkbox[formcontrolname="id_medio_allow"] label').click({force:true});
        cy.get('input[formcontrolname=name]').click({force:true}).type('procesador de '+nombreAleatorio,{force:true});
        cy.wait(1000);
        cy.contains('Guardar').click({force:true});
        cy.wait(3000);
        cy.contains('Cancelar').click({force:true});
        //Excepciones agregar nombre con puros caracteres especiales
        cy.contains('Agregar').click({force:true});
        cy.get('mat-checkbox[formcontrolname="id_medio_allow"] label').click({force:true});
        cy.get('input[formcontrolname=name]').click({force:true}).type('; - ; ',{force:true});
        cy.wait(1000);
        cy.contains('Guardar').click({force:true});
        
        
 



    })
})