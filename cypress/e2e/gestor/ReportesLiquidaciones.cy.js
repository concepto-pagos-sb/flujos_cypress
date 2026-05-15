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
        cy.contains('Liquidaciones').click({force:true});
        cy.get('body').click(0,0);
        //funcion para si o si dar el click , ya que esta intermitente
       /*
        function abrirMerchant(intentos = 0) {
         if (intentos > 5) {
        throw new Error('No se pudo abrir el mat-select merchant');
        }

        cy.get('input[formcontrolname="merchant_name"]').click();

        cy.get('body').then($body => {
        if ($body.find('.mat-mdc-select-panel').length === 0) {
        abrirMerchant(intentos + 1);
        }
        });
        }

        abrirMerchant();*/
      


      cy.get('input[formcontrolname="merchant_name"]').click({force:true});
      cy.contains('Tiendas Don panchito').click({force:true});
      //cy.scrollTo('bottom');
              //cy.get('input[formcontrolname="start_date"]').clear();
        //cy.get('input[formcontrolname="start_date"]').click({force:true});
        //cy.get('input[formcontrolname="start_date"]').type('09/01/2026',{delay:100});
        //cy.get('input[formcontrolname="start_date"]').should('have.value','09/01/2026');
    
        //cy.wait(3000);
        //cy.get('input[formcontrolname="end_date"]').should('be.visible').clear().click().type('12/01/2026',{delay:100}).blur();

        cy.get('button[aria-label="Open calendar"]').click();
        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="7 de febrero de 2026"]').click();

        cy.contains('Buscar').click({force:true});
        cy.wait(2000);

        //Descargar reporte

        cy.contains('button','Descargar').click({force:true});

        //Desplazzarse  ultima pagina y primer pag

        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});




        //cy.get('mat-icon[mattooltip="Limpiar"]').click();



    })
})