import { faker, tr } from "@faker-js/faker";

describe('Automatizacion 3Ds', () => {

        const numero_6=faker.number.int({min:5500000000, max:5599999999});
        const nombre = faker.person.firstName();
        const apellido1 = faker.person.lastName();
        const numero_tarjeta=4000000000002701;
        

//hola cara de bola
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
        const numero_tarjeta=4000000000002701; const numero_tarjeta_2=5200000000002235; const numero_tarjeta_3=4000000000002925;  const numero_tarjeta_4=5200000000002276;
        const numero_tarjeta_5=5200000000002482; const numero_tarjeta_6=4000000000002719;const numero_tarjeta_7=5200000000002268; const numero_tarjeta_8=4000000000002313;
        const numero_tarjeta_9=5200000000008080; const numero_tarjeta_10=4000000000002537; const numero_tarjeta_11=5200000000002409; const numero_tarjeta_12=4000000000002990;
        const numero_tarjeta_13=5200000000002037; const numero_tarjeta_14=4000000000002446; const numero_tarjeta_15=5200000000002326;const numero_tarjeta_16=4000000000002354;
        const numero_tarjeta_17 = "5200000000002508"; const numero_tarjeta_18 = "4000000000002560"; const numero_tarjeta_26 = "4000000000002560";const numero_tarjeta_27 = "4000000000002537";
        const numero_tarjeta_29 = "4000000000002701";

        const correo="accept@mail.com"; const correo_2="reject@mail.com"; const correo_3="review@mail.com";
        const pagos = [
  { tarjeta: numero_tarjeta, correo: correo },
  { tarjeta: numero_tarjeta_2, correo: correo },
  { tarjeta: numero_tarjeta_3, correo: correo_2 },
  { tarjeta: numero_tarjeta_4, correo: correo_2 },
  { tarjeta: numero_tarjeta_5, correo: correo },
  { tarjeta: numero_tarjeta_6, correo: correo },
  { tarjeta: numero_tarjeta_7, correo: correo },
  { tarjeta: numero_tarjeta_8, correo: correo },
  //{ tarjeta: numero_tarjeta_9, correo: correo_2 }, 
  { tarjeta: numero_tarjeta_10, correo: correo_2 },
  { tarjeta: numero_tarjeta_11, correo: correo },
  { tarjeta: numero_tarjeta_12, correo: correo },
  { tarjeta: numero_tarjeta_13, correo: correo },
  { tarjeta: numero_tarjeta_14, correo: correo },
  { tarjeta: numero_tarjeta_15, correo: correo_2 },
  { tarjeta: numero_tarjeta_16, correo: correo_2 },
  { tarjeta: numero_tarjeta_17, correo: correo_2 },//poner correo lista negra
  { tarjeta: numero_tarjeta_18, correo: correo },
  { tarjeta: numero_tarjeta_26, correo: correo },
  { tarjeta: numero_tarjeta_27, correo: correo_2 },  
  { tarjeta: numero_tarjeta_29, correo: correo },

];

pagos.forEach(({ tarjeta, correo }) => {
  pago(tarjeta, correo);
  cy.wait(3000);
});
//flujo lista negra
    })

})