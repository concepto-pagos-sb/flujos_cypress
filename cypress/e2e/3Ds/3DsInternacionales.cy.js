import { faker, tr } from "@faker-js/faker";

describe('Automatizacion 3Ds', () => {

            const numero_6=faker.number.int({min:5500000000, max:5599999999});
        const nombre = faker.person.firstName();
        const apellido1 = faker.person.lastName();
        const numero_tarjeta=4000000000002701;
        


     function pago(numero_tarjeta,correo)
        {

        cy.visit('https://pago-qa.conceptopagos.com/e535721f506ec86f0a5453be2505fd4539c8a9435cda2a7b66a782ad5dc18f3d369704d52fe9a19663b6a8a747fc7bdaf201fcd44a6fc224002cc376ef47fbb5');
        cy.get('body').should('be.visible');
        cy.get('input[maskedinput]').click({force:true}).type(numero_tarjeta,{delay:100});
        cy.get('input[mask="00/00"]').click().type('12/27',{delay:100});
        cy.get('input[mask="0000"]').click().type('311');
        cy.contains('Nombre(s)').parents('mat-form-field').find('input').click().type(nombre);
        cy.contains('Apellido(s)').parents('mat-form-field').find('input').click().type(apellido1);
        cy.get('input[mask="0000000000"]').click().type(numero_6,{delay:100});
        const new_name=(nombre+apellido1).toLowerCase();
        cy.contains('Correo electrónico').parents('mat-form-field').find('input').click().type(correo);
        cy.get('button[class="button-primary pay-button w80"]').click({force:true});
        
        cy.get('body', { timeout: 30000 }).should(($body) => {
        const text = $body.text();

        expect(
        text.includes('Tu pago se realizó exitosamente') ||
        text.includes('Transacción no autorizada')
        ).to.be.true;
        });
    }

    it('3Ds', ()=>{

const correo="accept@mail.com"; const correo_2="reject@mail.com"; const correo_3="review@mail.com";
  // Constantes de tarjetas
const BIN_ALEMANIA = '5412100000000009';
const BIN_FRANCIA = '4970100000000006';
const BIN_CHILE = '5225920000000007';
const BIN_BRASIL = '4096660000000008';
const BIN_ESPANA = '4548810000000003';

// Array de datos
const pagos = [
  { tarjeta: BIN_ALEMANIA, correo: correo },
  //{ tarjeta: BIN_ALEMANIA, correo: correo },
  { tarjeta: BIN_ALEMANIA, correo: correo_2 },

  { tarjeta: BIN_FRANCIA, correo: correo },
  //{ tarjeta: BIN_FRANCIA, correo: correo },
  { tarjeta: BIN_FRANCIA, correo: correo_2},

  { tarjeta: BIN_CHILE, correo: correo },
  //{ tarjeta: BIN_CHILE, correo: correo },
  { tarjeta: BIN_CHILE, correo: correo_2},

  { tarjeta: BIN_BRASIL, correo: correo },
  //{ tarjeta: BIN_BRASIL, correo: correo },
  { tarjeta: BIN_BRASIL, correo: correo_2},

  { tarjeta: BIN_ESPANA, correo: correo },
  //{ tarjeta: BIN_ESPANA, correo: correo },
  { tarjeta: BIN_ESPANA, correo: correo_2},
];
pagos.forEach(({ tarjeta, correo }) => {
  pago(tarjeta, correo);
  cy.wait(3000);
});
//flujo lista negra
    })

})