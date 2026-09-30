describe('Panel de control', () => {
    
    beforeEach(()=>{
        cy.Loginss();
        cy.wait(3000);
    })
    it('Revision panel de control', () => {
        /* ===============  LOGIN  =============== */
        cy.visit('https://dashboard-qa.conceptopagos.com/');
        cy.get('body').click(23.99,23.99);
        cy.get('mat-icon.icon-menu').click({force:true});
        //notificaciones campana//
        cy.get('mat-icon.notification-icon').click({force:true});
        //revision de fechas
        cy.get('input[formcontrolname="startDate"]').click({force:true});
        cy.contains('.mat-calendar-body-cell-content', '1').click();
        cy.wait(1000);
        cy.get('input[formcontrolname="endDate"]').click({force:true});
        cy.contains('.mat-calendar-body-cell-content', '21').click();
        cy.contains('button','Consultar').click({force:true});

        //revision notificaciones campana
        cy.contains('mat-icon','notifications_active').click({force:true});
        //acceso a reporte
        cy.contains('p','Ver más').click({force:true});


    }

)}

);