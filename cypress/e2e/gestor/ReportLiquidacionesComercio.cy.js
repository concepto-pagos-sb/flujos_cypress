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
        cy.contains('Liquidaciones por comercio').click({force:true});
        cy.get('body').click(0,0);
        cy.get('input[formcontrolname="merchantRegId"]').click({force:true}).type('06E049ECB71347',{delay:100});
        cy.contains('button','Buscar').click({force:true});
        //descargar reporte
        cy.contains('button','Descargar').click({force:true});
        cy.wait(3000);
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});

        //busqueda por comercio
        cy.get('input[formcontrolname="merchantName"]').click({force:true}).type('Tiendas Don panchito',{delay:100});
        cy.contains('button','Buscar').click();
        
        //buscar por fecha
        cy.get('button[aria-label="Open calendar"]').click();

        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="12 de febrero de 2026"]').click();
        cy.contains('button','Buscar').click();


    })
})
