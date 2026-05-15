describe('reporte landing', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('reporte de landing',()=>{

        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.wait(1000);
        cy.contains('Landings').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);

        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(4000);

        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="12 de febrero de 2026"]').click();
        cy.contains('button','Buscar').click();
        //descargar reporte
        cy.contains('button','Descargar').click({force:true});
        //ir ultima pagina y luego primer pagina
        cy.wait(3000);
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});
        //limpiar filtros
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});



    })
})
