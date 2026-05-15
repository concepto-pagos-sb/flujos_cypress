describe('Acumulado de transacciones', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Acumulado de transacciones',()=>{

        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.wait(1000);
        cy.contains('Acumulado de transacciones').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(2000);
        cy.get('button[aria-label="1 de marzo de 2026"]').click({force:true});
        cy.wait(2000);
        cy.get('button[aria-label="11 de marzo de 2026"]').click({force:true});
        cy.wait(2000);
        cy.get('input[formcontrolname="merchant_name"]').click({force:true});
        cy.contains('Tiendas Don panchito').click({force:true});
        cy.get('input[formcontrolname="landing_name"]').click({force:true});
        cy.contains('Pagina principal').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //Descarga de reporte
        cy.wait(2000);
        cy.contains('button','Descargar').click({force:true});
        //Limpiar filtros
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
        //------------
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(2000);
        cy.get('button[aria-label="1 de marzo de 2026"]').click({force:true});
        cy.wait(2000);
        cy.get('button[aria-label="11 de marzo de 2026"]').click({force:true});
        cy.wait(2000);
        cy.contains('button','Buscar').click({force:true});
        //Ir ultima y primer pagina
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});
        cy.wait(2000);
        ////seleccion de elementos visibles
        
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
        cy.wait(1000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('50').click({force:true});


        



    })
})