describe('Inicio', () => {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('Inicio',()=>{

        cy.viewport(1920, 1080);
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.wait(1000);
        cy.contains('Inicio').click({force:true});
        cy.wait(1000);
        //seleccion por comercio
        cy.get('input[formcontrolname="merchant"]').click({force:true});
        cy.contains('Tiendas Don panchito').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        cy.wait(3000);
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
        //seleccion por landing
        cy.get('input[formcontrolname="landing"]').click({force:true});
        cy.contains('portal de clientes').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        //seleccion de fecha
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(4000);
        cy.get('button[aria-label="Previous month"]').click({force:true});
        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="12 de febrero de 2026"]').click();
        cy.contains('button','Buscar').click();
        cy.wait(3000);
        //verificar elementos
        cy.contains('h2','Totales').should('exist').click();
        cy.contains('h2','Activos').should('exist').click();
        cy.contains('h2','Monto total').should('exist').click();
        cy.contains('h2','Totales').should('exist').click();
        cy.contains('h2','Aprobadas').should('exist').click();
        cy.contains('h2','Rechazadas').should('exist').click();
        cy.contains('h2','Declinadas').should('exist').click();
        cy.contains('Top 10 comercios por monto aprobado').should('exist').and('be.visible').click();
        cy.contains('Montos totales por producto').should('exist').and('be.visible').click();
        cy.contains('Montos totales por banco').should('exist').and('be.visible').click();
        cy.contains('Montos totales por tipo de tarjeta').should('exist').and('be.visible').click();
        cy.contains('Tipo de transacciones').should('exist').and('be.visible').click();
        cy.contains('Transacciones por marca').should('exist').and('be.visible').click();
        cy.contains('Rechazos por banco').should('exist').and('be.visible').click();
        cy.contains('Transacciones por moneda').should('exist').and('be.visible').click();
        cy.scrollTo('top');
        //limpiar filtros
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});



    })
})