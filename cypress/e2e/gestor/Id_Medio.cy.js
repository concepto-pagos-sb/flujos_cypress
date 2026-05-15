import { faker } from '@faker-js/faker';
//import { cli } from 'cypress';

describe('IdMEdio', ()=> {
    
    
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('BuscarIdMedio', ()=>{
        //Agregar Id medio
        function agregarid(var1) {
        cy.get('.mat-mdc-tooltip-trigger > .mat-icon').click({force:true});
        cy.wait(3000);
        cy.get('.btn-outline > .mat-mdc-button-touch-target').click({force:true});
        cy.get('[formcontrolname="id_channel"]').eq(1).click({force:true}).type(cadena,{delay:100});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="product_id"]').eq(1).click({force:true});
        cy.get('mat-option').contains('Link de pago').click({ force: true });   
        cy.wait(1000);
        cy.get('mat-select[formcontrolname=processor_id]').eq(1).click({froce:true});
        cy.get('mat-option').contains('wdwdw').click({ force: true });
        cy.wait(1000);
         cy.contains('Guardar').click({force:true});
        }
        
        cy.viewport(1920, 1080);
        
        const cadena = faker.string.alphanumeric(8);
        let cadena2 = 32392939;
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.contains('Id Medio').should('be.visible').click({force:true});
        cy.get('body').should('be.visible').click(0,0);

        cy.contains('Buscar').as('botonbuscar');
        cy.get('input[formcontrolname=id_channel]').click({force:true}).type('876TFVB7',{delay:100,force:true});
        cy.get('@botonbuscar').click({force:true});
        cy.wait(4000);
        //Buscar por producto
        cy.get('button[mattooltip="Limpiar filtros"]').click({forrce:true});
        cy.get('mat-select[formcontrolname=product_id]').click({force:true});
        cy.contains('mat-option','Tarjeta presente').click({force:true});
        cy.wait(2000);
        //cy.get('mat-option').contains('Tap to phone').click({ force: true });      
        cy.get('@botonbuscar').click({force:true});
        cy.wait(4000);
        //Buscar por procesador
        cy.get('button[mattooltip="Limpiar filtros"]').click({forrce:true});
        cy.get('mat-select[formcontrolname="processor_id"]').click({force:true});
        cy.wait(2000);
        cy.get('mat-option').contains('PROD').click({ force: true });
        cy.get('@botonbuscar').click({force:true});
        cy.wait(4000);
        //Agregar Id medio
        agregarid(cadena);
         //Excepciones
        //buscar id medio inexistente
        cy.get('input[formcontrolname=id_channel]').eq(0).click({force:true}).type('holiscrayolis',{delay:100,force:true});
        cy.get('@botonbuscar').click({force:true});
        cy.wait(3000);
        //agregar id medio repetido
        cy.get('.mat-mdc-tooltip-trigger > .mat-icon').click({force:true});
        cy.wait(3000);
        cy.get('.btn-outline > .mat-mdc-button-touch-target').click({force:true});
        //cy.get('#mat-input-2').click({force:true}).type(cadena2,{delay:100});
        cy.wait(1000);
        cy.get('[formcontrolname="id_channel"]').eq(1).click({force:true}).type(cadena2,{delay:100});

       cy.get('mat-select[formcontrolname="product_id"]').eq(1).click({force:true});
        cy.get('mat-option').contains('Link de pago').click({ force: true });   
        cy.wait(1000);
        cy.get('mat-select[formcontrolname=processor_id]').eq(1).click({froce:true});
        cy.get('mat-option').contains('wdwdw').click({ force: true });
        cy.wait(1000);
         cy.contains('Guardar').click({force:true});   

    })
})