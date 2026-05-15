describe('Automatizacion 3Ds' ,() => {
    beforeEach(()=>{
    cy.login_portal();
    })
    it('Pagos 3Ds',()=>{

        cy.visit('https://dashboard-qa.conceptopagos.com/');
        cy.contains('Pagos a Distancia').click({force:true});
        cy.contains('Link de pago').click({force:true});
        //cy.get('mat-expansion-panel-header[class="mat-expansion-panel-header mat-focus-indicator expansion-panel"]').click({force:true});
        cy.contains('mat-icon','clear').click({force:true});


    })
    
    
})