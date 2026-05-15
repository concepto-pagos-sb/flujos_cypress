import { faker } from '@faker-js/faker';
//import { cli } from 'cypress';

describe('Lista', ()=> {
    
    
    beforeEach(()=>{
        cy.LoginGestor();
    })

    it('Lista', () => {
        cy.viewport(1920, 1080);
        const telefono=faker.string.numeric(10);
        const correo = faker.internet.email();


        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        //-----------------------Numero-de-telefono--------------------//

        cy.contains('mat-label','Prevencion de fraudes').click({force:true});
        cy.wait(2000);
        cy.contains('Lista negra').should('be.visible').click({force:true});
        cy.get('body').click(0,0);
        cy.scrollTo('top');
        cy.contains('span','Agregar a lista negra').click({force:true});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="type"]').click({force:true});
        cy.get('mat-option').contains('Teléfono').click({force:true});
        cy.wait(1000);
        cy.get('input[formcontrolname=telephone]').click({force:true}).type(telefono,{delay:100});
        cy.get('textarea[formcontrolname="comments"]').click({force:true}).type('Por malo',{delay:100});
        cy.contains('span','Guardar').click({force:true});

        //---------------------------Correo-electronico------------------//

        cy.contains('span','Agregar a lista negra').click({force:true});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="type"]').click({force:true});
        cy.get('mat-option').contains('Correo electrónico').click({force:true});
        cy.get('input[formcontrolname="email"]').eq(1).click({force:true}).type(correo,{delay:100});
        cy.wait(1000);
        //cy.contains('mat-label','Correo electronico').click({force:true}).type(correo,{delay:100});
        cy.get('textarea[formcontrolname="comments"]').click({force:true}).type('Por malvado',{delay:100});
        cy.contains('span','Guardar').click({force:true});

        //Activar y desactivar
        
        cy.get('button[role="switch"][aria-checked="true"]').eq(0).click({force:true});
        cy.contains('button', 'Aceptar').click({force:true});
       cy.wait(4000); 
        cy.get('button[role="switch"][aria-checked="false"]').eq(0).click({force:true});
        cy.contains('button', 'Aceptar').click({force:true});


        //cy.get('button[role="swicth"]').first().click({force:true});






        

    })
})
