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
        cy.contains('Suscripciones').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);
        cy.get('input[formcontrolname="merchantName"]').click({force:true}).type('Tiendas Don panchito',{delay:100});
        cy.contains('button','Buscar').click({force:true});

        cy.wait(3000);
        cy.get('button[mattooltip="Limpiar filtros"]').click({force:true});
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(4000);

        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="12 de febrero de 2026"]').click();
        cy.contains('button','Buscar').click();

        //buscar todas
        cy.get('mat-select[formcontrolname="status"]').click({force:true});
        cy.contains('Todas').click();
        cy.contains('button','Buscar').click();
        cy.wait(3000);
        //buscar activas
        cy.get('mat-select[formcontrolname="status"]').click({force:true});
        cy.contains('Activas').click();
        cy.contains('button','Buscar').click();
        cy.wait(3000);
        //buscar inactivas
        cy.get('mat-select[formcontrolname="status"]').click({force:true});
        cy.contains('Inactivas').click();
        cy.contains('button','Buscar').click();
        //Descargar reporte
        cy.wait(2000);
        cy.contains('button','Descargar').click({force:true});
        cy.wait(2000);

        cy.get('button[mattooltip="Limpiar filtros"]').click({force:true});
        cy.get('input[formcontrolname="merchantName"]').click({force:true}).type('Tiendas Don panchito',{delay:100});
        cy.contains('button','Buscar').click({force:true});
        //ir primera y ultima pagina
        cy.wait(3000);
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});
        cy.wait(3000);
        //seleccion de elementos visibles
        
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});

        cy.get('.cdk-overlay-container mat-option').contains('10').click({force:true});
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('15').click({force:true});




        



    })
})