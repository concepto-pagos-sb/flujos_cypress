import { faker, tr } from "@faker-js/faker";

describe('Alta de cliente', ()=> {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Alta cliente', ()=>{
           cy.viewport(1920, 1080);
        const nombre = faker.person.firstName();
        const numero =Math.floor(Math.random()*1000)+1;
        const numero_6=faker.number.int({min:5500000000, max:5599999999});
        const apellido1 = faker.person.lastName();
        const apellido2 = faker.person.lastName();
        const correo = faker.internet.email();
        const calle = faker.location.street();
        const cadena = faker.string.alphanumeric(13);

        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Administracion de comercios').click({force:true});
        
        cy.contains('button','Alta de Cliente').click({force:true});
        cy.wait(3000);
        cy.get('input[formcontrolname="name"]').click({force:true}).type(nombre,{delay:100});
        cy.get('input[formcontrolname="rfc"]').click({force:true}).type(cadena,{delay:100});
        cy.get('input[formcontrolname="street_name"]').click({force:true}).type(calle,{delay:100});
        cy.get('input[formcontrolname="number_ext"]').click({force:true}).type('12',{delay:100});
        cy.get('input[formcontrolname="postal_code"]').click({force:true}).type('07200',{delay:100});
        cy.get('mat-select[formcontrolname="locality"]').click({force:true});
        cy.wait(3000);
        cy.contains('Cuautepec de Madero').click({force:true});
        cy.get('input[formcontrolname="principal_phone"]').click({force:true}).type(numero_6,{delay:100});
        cy.contains('Guardar').click({force:true});

        //consulta por registro//
        cy.get('input[formcontrolname="searchID"]').click({force:true}).type('44D2649768DA44',{delay:100});
        cy.contains('button','Buscar').click({force:true});
        cy.wait(3000);
        //Limpia registros
        cy.contains('mat-icon','refresh').click({force:true});
        //consulta por nombre de comercio
        cy.wait(2000);
        cy.get('input[formcontrolname="search"]').click({force:true}).type('Tienda de maganarico',{delay:100});
        cy.contains('button','Buscar').click({force:true});
        cy.wait(3000);
        //Limpia registros
        cy.contains('mat-icon','refresh').click({force:true});
        cy.wait(4000);

        let i=0;
        while(i<2)
        {
        //activar controles
        cy.get('button[role="switch"]').eq(1).click({force:true});
        cy.wait(2000);
        cy.contains('Aceptar').click({force:true});
        cy.wait(2000);
        //activar llaves
        
        cy.get('button[role="switch"]').eq(0).click({force:true});
        cy.wait(2000);
        cy.contains('Aceptar').click({force:true});
        cy.wait(2000);
        i++
        }
        //ir ultima pagina y primer pagina
        //ir ultima y primer pagina
        cy.wait(3000);
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});
        cy.wait(3000);
        //seleccion de elementos visibles
        
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('10').click({force:true});
        cy.wait(3000);
        cy.scrollTo('bottom');
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('5').click({force:true});
        cy.wait(3000); 
    })
})