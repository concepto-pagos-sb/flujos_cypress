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
        cy.contains('Detalle facturación').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);
        //seleccion fechas
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(4000);

        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="12 de febrero de 2026"]').click();
        cy.contains('button','Buscar').click();
        cy.wait(3000);
        cy.contains('button','Descargar');
        //ir ultima pagina y luego primera pagina
        cy.wait(3000);
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});
        //seleccion de elementos visibles
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});

        cy.get('.cdk-overlay-container mat-option').contains('5').click({force:true});
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('10').click({force:true});
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('25').click({force:true});
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('50').click({force:true});
        cy.wait(3000);
        //limpiar registros
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});


    })
} )