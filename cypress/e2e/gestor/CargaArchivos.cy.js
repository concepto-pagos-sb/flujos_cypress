import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
//import { cli } from 'cypress';

describe('Carga de archivos', ()=> {
    
    
    beforeEach(()=>{
        cy.LoginGestor();
    })

    it('Carga de archivo', () => {
        cy.viewport(1920, 1080);
        const telefono=faker.string.numeric(10);
        const correo = faker.internet.email();
        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Carga de archivos').click({force:true});
        cy.scrollTo('top');
        cy.get('body').click(0,0);
        cy.wait(1000);
        
        cy.get('mat-select[formcontrolname=fileType]').click({force:true});
        cy.contains('Bancarios').click({force:true});

        cy.get('mat-select[formcontrolname="files"] .mat-mdc-select-trigger').should('be.visible').click({ force: true });
        cy.contains('mat-option','Liquidaciones').click();
        cy.wait(2000);

        cy.get('.file-upload').attachFile('hoja_2.csv', { force: true });
        cy.wait(3000);
        cy.contains('span','Guardar').click({force:true});
        //cy.contains('Liquidaciones').click({force:true});



    })
})