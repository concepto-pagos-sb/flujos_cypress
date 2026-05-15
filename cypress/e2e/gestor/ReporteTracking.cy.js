describe('reporte tracking', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('reporte tracking',()=>{
        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.wait(1000);
        cy.contains('Tracking').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(4000);
        cy.get('button[aria-label="Previous month"]').click()
        cy.wait(3000);
        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="26 de febrero de 2026"]').click();
        cy.contains('button','Buscar').click();
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
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('25').click({force:true});
         cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('50').click({force:true});
        cy.wait(3000);
        cy.scrollTo('top');
        cy.wait(2000);
        //Descargar reporte
        cy.contains('button','Descargar').click();
        cy.wait(3000);
        cy.scrollTo('top');
        //Buscar por tracking
        cy.get('input[formcontrolname="tracking_status"]').click({force:true}).type('numero telefonico verificado',{delay:100});
        cy.contains('button','Buscar').click({force:true});
        cy.scrollTo('top');
        cy.wait(3000);
        //limpiar filtros
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});



    })
})
