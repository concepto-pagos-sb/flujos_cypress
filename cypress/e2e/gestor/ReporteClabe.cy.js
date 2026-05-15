describe('reporte de liquidaciones', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('reporte de liquidaciones',()=>{

        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.wait(1000);
        cy.contains('Clabe Interbancaria').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);
        //busqueda por ID
        cy.get('input[formcontrolname="registrationId"]').click({force:true}).type('06E049ECB71347',{delay:100});
        cy.contains('button','Buscar').click({force:true});
        //Limpiar conullta
        cy.wait(3000);
        cy.get('button[mattooltip="Limpiar filtros"]').click({force:true});
        cy.wait(3000);
        //Buscar por nombre del comercio
        cy.get('input[formcontrolname="merchantName"]').click({force:true}).type('Tiendas Don',{delay:100});
        cy.contains('button','Buscar').click({force:true});

        cy.wait(3000);
        cy.get('button[mattooltip="Limpiar filtros"]').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        
        //ir ultima pagina y luego primera pagina
        cy.wait(3000);
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});

        //Descarga de reporte
        cy.contains('button','Descargar').click({force:true});
        //seleccion de elementos visibles
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});

        cy.get('.cdk-overlay-container mat-option').contains('10').click({force:true});
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('15').click({force:true});





    })
})
