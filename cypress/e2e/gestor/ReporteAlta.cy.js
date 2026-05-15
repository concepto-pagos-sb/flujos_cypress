describe('reporte de Alta', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('reporte de Alta',()=>{

        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.wait(1000);
        cy.contains('Altas').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);
        //selecciona fecha
        cy.wait(1000);
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(4000);

        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="12 de febrero de 2026"]').click();
        cy.contains('button','Buscar').click();
        
        //ir ultima pagina y luego primera pagina
        cy.wait(3000);
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});
        
        //Descarga reporte
        cy.wait(2000);
        cy.contains('button','Descargar').click({force:true});
        cy.wait(2000);
        //buscar por comercio
        cy.get('input[formcontrolname="merchant_name"]').click({force:true}).type('Tiendas Don panchito',{delay:100});
        cy.contains('button','Buscar').click();
        //limpiar consultas
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});


    })
})