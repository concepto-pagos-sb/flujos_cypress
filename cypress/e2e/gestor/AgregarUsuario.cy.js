import { faker } from "@faker-js/faker";

describe('Usuarios', ()=> {
    
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Usuarios', ()=>{
        
        
        const nombre=faker.person.firstName().toLowerCase();
        var paterno=faker.person.lastName();
        paterno=paterno.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '');
        var materno=faker.person.lastName();
        materno=materno.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '');
        const correo=faker.internet.email(nombre);
        const telefono=faker.string.numeric(10);

        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.get('body').click(23.99,23.99);
        cy.contains('Operacion').click({force:true});
        cy.contains('Usuarios').click();
        cy.get('body').click(0,0);
        cy.wait(2000);
        cy.get('.mat-mdc-button-touch-target').should('be.visible').eq(4).click({force:true});
        cy.get('input[formcontrolname=name]').click().type(nombre,{delay:100});
        cy.contains('Apellido Paterno').should('be.visible').click().type(paterno,{delay:100});
        cy.contains('Apellido Materno').should('be.visible').click().type(materno,{delay:100});
        cy.get('input[formcontrolname=userName]').click({force:true}).type(`${nombre}15@yopmail.com`,{delay:100});
        cy.get('input[formcontrolname=phoneNumber]').click().type(telefono,{delay:100});
        cy.get('.mat-mdc-select-placeholder').should('be.visible').click();
        cy.get('div.cdk-overlay-container mat-option').contains('EquisUno').scrollIntoView().click();//scrollera y seleccionar
       // cy.get('.mat-mdc-select-placeholder span.mdc-list-item__primary-text').click();
       cy.wait(2000);
       cy.contains('Guardar').click({force:true});
       cy.scrollTo('top')
       //Activar y desactivar
       cy.scrollTo('top');
       cy.wait(2000);
       cy.get('input[formcontrolname=email]').click({force:true}).type('temcm@yopmail.com',{delay:100});
       cy.scrollTo('top');
       cy.contains('button', 'Buscar').click({force:true});
       let i=0;
       while(i<2){
       cy.get('button[role="switch"]').eq(0).click();
       cy.contains('Aceptar').click({force:true});
       i++;
       cy.wait(2000);
       }
       //editar usuario
       cy.contains('mat-icon', 'edit').click();
       cy.get('input[formcontrolname=firstLastName]').click().clear().type(paterno,{delay:100});
       cy.contains('Guardar').click({force:true});
       cy.contains('mat-icon', 'lock_reset').click({force:true});  
       cy.contains('Aceptar').click({force:true});
       //buscar por telefono
       cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
       cy.scrollTo('top');
       cy.get('input[formcontrolname="phone"]').click({force:true}).type(telefono,{delay:100});
       cy.contains('button','Buscar').click({force:true});
       cy.wait(3000);
       //buscar telefono inexistente
       cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
       cy.get('input[formcontrolname="phone"]').click({force:true}).type('5512000102',{delay:100});
       cy.scrollTo('top');
       cy.contains('button','Buscar').click({force:true});
       cy.wait(3000);
       //Buscar por correo
       cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
       cy.get('input[formcontrolname="email"]').click({force:true}).type(`${nombre}15@yopmail.com`,{delay:100});
       cy.scrollTo('top');
       cy.contains('button','Buscar').click({force:true});
       cy.pause();
       //restablecer password (PRIMERO SE NECESITA INICIAR SESION)
       cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
       cy.get('input[formcontrolname="email"]').click({force:true}).type(`${nombre}15@yopmail.com`,{delay:100});
       cy.contains('mat-icon','lock_reset').click();
       cy.contains('Aceptar').click({force:true});





    })
})