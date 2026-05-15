import { faker } from '@faker-js/faker';

describe('MID', ()=> {
    
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('MID', ()=>{

        const random=Math.floor(Math.random()*1000) 
        
        
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.viewport(1920, 1080);
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.get('.m-3:visible').contains('Mid').click({force:true});
        cy.get('body').should('be.visible').click(0,0);
        cy.scrollTo('top');
        //buscar Mid//
        cy.get('input[formcontrolname=search]').click({force:true}).type('MadMids',{force:true});
        cy.contains('Buscar').click({force:true});
        cy.wait(3000);
        cy.contains('mat-icon','refresh').click({force:true});
        cy.wait(3000);
        //gestionar elemento
        cy.contains('mat-icon','edit').click({force:true});
        cy.get('input[formcontrolname=name]').click().clear();
        cy.get('input[formcontrolname=name]').click({force:true}).type(`prueba${random}`,{delay:100},{force:true});
        cy.get('input[formcontrolname=description]').click().clear();
        cy.get('input[formcontrolname=description]').click({force:true}).type(`prueba${random}`,{delay:100},{force:true});
        cy.contains('Guardar').click({force:true});
        //activar y desactivar elemento
        cy.wait(2000);
        //cy.get('button[role="swicth"]').eq(0).click({force:true});
        let i=0;
        
        while(i<2)
        {
        cy.get('button[role="switch"][aria-checked="true"]').eq(0).click();
        cy.contains('Aceptar').click({force:true});
        i++;
        cy.wait(3000);
        }
        

    })
})