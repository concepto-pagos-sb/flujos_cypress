describe('Configuracion de clientes', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Configuracon de clientes',()=>{

        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.wait(1000);
        cy.contains('Detalle de configuración de cliente').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);
        cy.get('input[formcontrolname="merchant_name"]').click({force:true});
        cy.contains('Tiendas Don panchito').click({force:true});
        cy.get('input[formcontrolname="landing_name"]').click({force:true});
        cy.contains('Pagina principal').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //Descargar reporte
        cy.contains('button','Descargar').click({force:true});
        cy.wait(2000);
        //Limpiar filtro
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
        cy.wait(2000);
        cy.get('input[formcontrolname="landing_name"]').click({force:true});
        cy.contains('Pagina principal').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //ir ultima y primer pagina
        cy.wait(3000);
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});
        cy.wait(3000);

        //seleccion de elementos visibles
        
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('5').click({force:true});
        cy.wait(3000);
        
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('10').click({force:true});
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('25').click({force:true});
         cy.wait(3000);
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('50').click({force:true});
        cy.wait(3000);
        cy.scrollTo('top');
        cy.wait(2000);




    })
})
