import { faker } from "@faker-js/faker";

describe('Redes Logicas', ()=>{
    beforeEach(()=>{
        cy.LoginGestor();
    })

it('Navegar seccion Redes logicas', () =>{
    cy.viewport(1920, 1080);
    const numero=faker.string.numeric(4);
    const numero2=faker.string.numeric(4);
    const nombre=faker.person.firstName();
    const nombre2=faker.person.firstName();
cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.contains('Redes Logicas').click();
        cy.get('body').click(0,0);
        cy.contains('Agregar').click({force:true});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="processor_id"]').find('.mat-mdc-select-trigger').click({ force: true });

        //cy.get('.mat-mdc-select-placeholder').find('.mat-mdc-select-trigger').eq(1).click({force:true})//dar clic en el tigger para desplegar opciones
        cy.get('mat-select[formcontrolname="processor_id"]').click({force:true});
        cy.contains('mat-option','procesador de Lorenzo').click({force:true});
        cy.get('input[formcontrolname="term_Ln"]').click({force:true}).type('00000002',{delay:100});
        cy.wait(3000);
        cy.get('input[formcontrolname="description"]').click({force:true}).type('Prueba n',{delay:100});
        cy .contains('Guardar').click({force:true});
        

        //Editar red logica
        cy.get('button[mattooltip="Editar"]').eq(0).click({force:true});
        cy.get('input[formcontrolname="term_Ln"]').clear().type(numero2,{delay:100});
        cy.get('input[formcontrolname="description"]').clear().type(`Red de ${nombre2}`,{delay:100});
        cy.wait(3000);
        cy.contains('Guardar').click({force:true});

        //Buscar red logica

        cy.get('input[formcontrolname="processor"]').click({force:true}).type('procesador de Stella',{delay:100});
        cy.contains('button','Buscar').click();

        




})
})