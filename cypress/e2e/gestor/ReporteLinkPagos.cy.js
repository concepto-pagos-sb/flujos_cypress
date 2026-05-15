

describe('Reporte link de pago',()=>{

    beforeEach(()=>{
        cy.LoginGestor();
    })


    it('reporte link de pagos', ()=> {
        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        
        cy.get('body').click(23.99,23.99);
        cy.contains('Reportes').click({force:true});
        cy.contains('Link de pago').click();
        cy.get('body').click(0,0);
        cy.wait(3000);

        cy.get('mat-select[formcontrolname="merchant"]').click({force:true});
        cy.contains('mat-option','Tiendas Don panchito').click();
        cy.get('input[formcontrolname="start_date"]').click().type('01/02/2026',{delay:100},{force:true});
        cy.get('input[formcontrolname="end_date"]').click().type('05/02/2026',{delay:100},{force:true});
        cy.contains('button','Buscar').click({force:true});
        //descargar reporte
        cy.contains('button','Descargar').click({force:true});






    })
})