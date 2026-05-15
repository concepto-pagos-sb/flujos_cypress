describe('Historico de clientes', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Historico de clientes',()=>{
        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.wait(1000);
        cy.contains('Histórico de clientes').click({force:true});
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
        cy.wait(3000);
        cy.get('input[formcontrolname="merchant_name"]').click({force:true});
        cy.contains('Tiendas Don panchito').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //buscar por landing

        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(4000);
        cy.get('button[aria-label="Previous month"]').click()
        cy.wait(3000);
        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="26 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('input[formcontrolname="landing_name"]').click({force:true});
        cy.contains('Pagina principal').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //buscar todos
        cy.get('mat-select[formcontrolname="operational_status"]').click({force:true});
        cy.contains('mat-option','Todos').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //buscar siin transacciones
        cy.wait(3000);
        cy.get('mat-select[formcontrolname="operational_status"]').click({force:true});
        cy.contains('mat-option','Sin transacciones').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //buscar con transacciones
        cy.wait(3000);
        cy.get('mat-select[formcontrolname="operational_status"]').click({force:true});
        cy.contains('mat-option','Ya transaccionó').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //Descarga reporte
        cy.wait(3000);
        cy.contains('button','Descargar').click({force:true});

        



    })
})
