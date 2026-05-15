import { faker, tr } from '@faker-js/faker';
//import { cli } from 'cypress';

describe('IdMEdio', ()=> {
    
    
    beforeEach(()=>{
        cy.LoginGestor();
    })

    it('Landings', () => {
        cy.viewport(1920, 1080);
        
        const cadena = faker.string.alphanumeric(8);
        const nombre = faker.person.firstName();
        const nombre2 = faker.person.firstName();
        const numero=faker.string.numeric(4);
        let cadena2 = 32392939;
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        //cy.get(':nth-child(4) > div.ng-star-inserted > .m-1',{timeout: 10000}).click({force:true});
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.get('mat-tree-node[aria-level="2"][aria-posinset="1"][aria-setsize="1"]').eq(20).click({force:true});


        cy.get('body').should('be.visible').click(0,0);
        
        //------------------------Buscar por nombre y descripcion-----------------------
        cy.get('input[formcontrolname="name"]').click({force:true}).type('try_2',{delay:100,force:true});
        cy.contains('span.mdc-button__label','Buscar').as('boton_buscar').click({force:true});
        cy.wait(3000);
        cy.get('.button-search > .mat-mdc-tooltip-trigger > .mat-icon').click({force:true});
        cy.get('input[formcontrolname=description]').click({force:true}).type('pagina principal',{delay:100});
        cy.get('@boton_buscar').click({force:true});
        cy.wait(3000);

        //----------------Gestionar-------------------------
        cy.get('.button-search > .mat-mdc-tooltip-trigger > .mat-icon').click({force:true});
        cy.get(':nth-child(3) > :nth-child(4) > .mat-mdc-tooltip-trigger > .mat-icon').click({force:true});
        cy.get('input[formcontrolname=name]').eq(1).click().clear().type(nombre,{delay:100});
        cy.get('textarea[formcontrolname=description]').click().clear().type(nombre,{delay:100});
        cy.contains('Guardar').click({force:true});
        cy.wait(3000);

        //-----------------Controles-----------------------
        for(let i =0;i<2;i++)
        {
        cy.get('#mat-mdc-slide-toggle-12-button > .mdc-switch__track').click({force:true});
        cy.wait(5000);
        cy.contains('span.mdc-button__label','Aceptar').click({force:true});
        cy.wait(5000);
        }
        //-------------Agregar-Landings----------------------
        cy.scrollTo('top');
        cy.contains('span','Agregar landing').click({force:true});
        cy.get('input[formcontrolname="name"]').eq(1).click({force:true}).type(nombre2,{delay:100});
        cy.get('textarea[formcontrolname=description]').click({force:true}).type(nombre2,{delay:100});
        cy.get('input[formcontrolname=backendId]').click({force:true}).type('VALOR_'+numero,{delay:100});
        cy.wait(1000);
        cy.contains('Guardar').click({force:true});



        


    })
})