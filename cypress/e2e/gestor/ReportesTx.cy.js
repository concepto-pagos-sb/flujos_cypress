describe('reportes transacciones', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('resporte transacciones',()=>{
        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.wait(1000);
        cy.contains('Transacciones').click({force:true});
        cy.get('body').click(0,0);
        //cy.get('input[formcontrolname="start_date"]').clear();
        cy.get('input[formcontrolname="start_date"]').click({force:true});
        cy.get('input[formcontrolname="start_date"]').type('01/01/2026',{delay:100});
        cy.get('input[formcontrolname="start_date"]').should('have.value','01/01/2026');
    
        cy.wait(1000);
        cy.get('input[formcontrolname="end_date"]').click({force:true}).type('16/01/2026',{delay:100});
        cy.get('mat-select[formcontrolname="operation_status"]').click({force:true});
        cy.contains('Aprobadas').click({force:true});
        cy.get('input[formcontrolname="merchant_name"]').click({force:true}).type('Tiendas Don panchito');
        cy.contains('Buscar').click({force:true});
        cy.wait(3000);
        //Activacion dia banregio
        cy.get('input[type="checkbox"].mdc-checkbox__native-control').check();
        cy.contains('Buscar').click({force:true});
        //Descarga reporte
        cy.contains('Descargar').click({force:true});


        


    })
})