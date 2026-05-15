import { tr } from "@faker-js/faker";

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
        cy.contains('Comisiones por transacción').click({force:true});
        cy.get('body').click(0,0);
        cy.wait(3000);
        cy.get('input[formcontrolname="merchantName"]').click({force:true}).type('Tiendas Don panchito',{delay:100});
        //selecciona fecha
        cy.wait(1000);
        cy.get('button[aria-label="Open calendar"]').click({force:true});
        cy.wait(4000);

        cy.get('button[aria-label="1 de febrero de 2026"]').click();
        cy.wait(3000);
        cy.get('button[aria-label="12 de febrero de 2026"]').click();
        cy.contains('button','Buscar').click();
        //Aprobadas
        cy.get('mat-select[formcontrolname="operation_status"]').click({force:true});
        cy.contains('Aprobadas').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        cy.wait(3000);
        cy.contains('button','Descargar').click({force:true});
        cy.wait(3000);
        cy.wait(3000);
        cy.get('button[aria-label="Última página"]').click({force:true});
        cy.wait(3000);
        cy.get('button[aria-label="Primera página"]').click({force:true});
        cy.wait(3000);
        //seleccion de elementos visibles
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});

        cy.get('.cdk-overlay-container mat-option').contains('10').click({force:true});
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('25').click({force:true});
        cy.wait(3000);
        cy.get('mat-paginator').find('.mat-mdc-select-trigger').click({force:true});
        cy.get('.cdk-overlay-container mat-option').contains('100').click({force:true});
        cy.wait(3000);
        //Rechazadas
        cy.get('mat-select[formcontrolname="operation_status"]').click({force:true});
        cy.contains('Rechazadas').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        cy.wait(3000);
        //Declinadas
        cy.get('mat-select[formcontrolname="operation_status"]').click({force:true});
        cy.contains('Declinadas').click({force:true});
        cy.contains('button','Buscar').click({force:true});
        cy.wait(3000);
        //Poner la hora manualmente con el pause
        //cy.get('input[formcontrolname="startHour"]').type('13:00:00',{delay:100});
        cy.pause();
        cy.contains('button','Buscar').click({force:true});
        //limpiar registros
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
        
    
    })  
})