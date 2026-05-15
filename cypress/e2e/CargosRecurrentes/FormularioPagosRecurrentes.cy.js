describe('Formulario para pagar un pago recurrente', () => {

    it('Formulario para pagar el pago recurrente/SIN PERIODO', () => {
        const nombre = 'Fernando Yañez Arvizu';
        const telefono = '5647359846';
        const email = 'fernando@gmailprueba.com';
        const linkSuscripcion = 'https://link-qa.conceptopagos.com/recurring-charges/13ec614764252fb4e9cddca1ce07f6e53d2574c12e3db7e3e70c58316431f4f1723d70ad0a94dc79e961c3754a50ba8b02576273467783d17d9bd7cfa4012d36'

        // Ya estás en el dominio de link-qa, así que aquí no se necesita cy.origin()
        cy.visit(linkSuscripcion);

        cy.get('input[formcontrolname="name"]').type(nombre, { delay: 150 });
        cy.get('input[formcontrolname="telephone"]').type(telefono, { delay: 150 });
        cy.get('input[formcontrolname="email"]').type(email, { delay: 150 });

        cy.get('#mat-mdc-checkbox-1-input').click();
        cy.wait(2000);

        cy.get('button[type="submit"]').should('not.be.disabled').click();

        cy.wait(5000)

        const token = '/000369529da149889158f296ce3b4141371a278886e4adde8f1f60367591120c525e5826b6dcbfcae9a7e5f950e0cad016f95722d17b08d0a6e1befaa042f711'

        // Aquí usas cy.origin para entrar al segundo dominio
        cy.origin('https://pago-qa.conceptopagos.com', {
            args: {token}
        }, ({token}) => {
            cy.visit(token);

            cy.contains('Detalle del pago').should('exist');

            let numTarjeta = '4000000000002370'
            let fechaVencimiento = '1227'
            let cvv = '311'
            let nombre = 'Diego'
            let apellido = 'Nogueira'

            cy.get('#mat-input-3').type(numTarjeta, { delay: 150 });

            cy.get('#mat-input-4').type(fechaVencimiento, { delay: 150 })

            cy.get('#mat-input-0').type(cvv, { delay: 150 })

            cy.get('#mat-input-1').type(nombre, { delay: 150 })

            cy.get('#mat-input-2').type(apellido, { delay: 150 })

            cy.wait(2000)

            cy.get('img.icon-pay-button').click();

            cy.wait(1500)

            cy.contains('Tu pago se realizó exitosamente').should('be.visible');

            // Verifica que el logo esté visible
            cy.get('img.logoApprovedPayment').should('be.visible');

            // Verifica los textos fijos
            cy.contains('span.bold', 'Número de recibo:').should('be.visible');
            cy.contains('span.bold', 'Concepto:').should('be.visible');
            cy.contains('span.bold', 'Pagaste a:').should('be.visible');




        });
    });
    
    it('Formulario para pagar el pago recurrente/PERIODO ACTUAL', () => {
        const nombre = 'Fernando Yañez Arvizu';
        const telefono = '5647359846';
        const email = 'fernando@gmailprueba.com';
        const linkSuscripcion = 'https://link-qa.conceptopagos.com/recurring-charges/6adbedd5ad9a3b67b6bb51ef555553f14c750bdca81dc17e520bacd1b7edfcd14cc63e8968c17bd332544a884b3effe8f011777d5449af0a7d56907b2904d54e'

        // Ya estás en el dominio de link-qa, así que aquí no se necesita cy.origin()
        cy.visit(linkSuscripcion);

        cy.get('input[formcontrolname="name"]').type(nombre, { delay: 150 });
        cy.get('input[formcontrolname="telephone"]').type(telefono, { delay: 150 });
        cy.get('input[formcontrolname="email"]').type(email, { delay: 150 });

        cy.get('#mat-mdc-checkbox-1-input').click();
        cy.wait(2000);

        cy.get('button[type="submit"]').should('not.be.disabled').click();

        cy.wait(5000)

        const token = '/37a0d4987a59543d1b5c4a567c2ad751d675f13fd7beba6c6e0af7e6025df623d9480bde90c3eecf3db55ac6cdbfab3566b8b63bbfe19412e29d80bf60ebb374'

        // Aquí usas cy.origin para entrar al segundo dominio
        cy.origin('https://pago-qa.conceptopagos.com',{args: {token}}, ({token}) => {
            cy.visit(token);

            cy.contains('Detalle del pago').should('exist');

            let numTarjeta = '4000000000002370'
            let fechaVencimiento = '1227'
            let cvv = '311'
            let nombre = 'Diego'
            let apellido = 'Nogueira'

            cy.get('#mat-input-3').type(numTarjeta, { delay: 150 });

            cy.get('#mat-input-4').type(fechaVencimiento, { delay: 150 })

            cy.get('#mat-input-0').type(cvv, { delay: 150 })

            cy.get('#mat-input-1').type(nombre, { delay: 150 })

            cy.get('#mat-input-2').type(apellido, { delay: 150 })

            cy.get('#mat-input-7').click();

            cy.wait(2000)

            cy.contains('div.col.d-flex', 'Actual').click()

            cy.wait(1500)

            cy.contains('button', 'Aceptar').click();
            

            cy.wait(1500)

            cy.get('img.icon-pay-button').click();

            cy.wait(1500)

            cy.contains('Tu pago se realizó exitosamente').should('be.visible');

            // Verifica que el logo esté visible
            cy.get('img.logoApprovedPayment').should('be.visible');

            // Verifica los textos fijos
            cy.contains('span.bold', 'Número de recibo:').should('be.visible');
            cy.contains('span.bold', 'Concepto:').should('be.visible');
            cy.contains('span.bold', 'Pagaste a:').should('be.visible');

            // Verifica la fecha de pago (texto exacto)
            cy.contains('span.blue', 'jueves, 26 de junio de 2025, 12:04:44 GMT-06:00').should('be.visible');




        });
    });

    it('Formulario para pagar el pago recurrente/PERIODO SIGUIENTE', () => {
        const nombre = 'Fernando Yañez Arvizu';
        const telefono = '5647359846';
        const email = 'fernando@gmailprueba.com';
        const linkSuscripcion = 'https://link-qa.conceptopagos.com/recurring-charges/8eda980d70a6a2cf4bfbfda29efc6b98a50422334b7e969749ec80e6ed55783f2e4038bfc5b28b3255f1a9313de9ed578a5daac4b58bfdc6bfbda56afbfa78d9'

        // Ya estás en el dominio de link-qa, así que aquí no se necesita cy.origin()
        cy.visit(linkSuscripcion);

        cy.get('input[formcontrolname="name"]').type(nombre, { delay: 150 });
        cy.get('input[formcontrolname="telephone"]').type(telefono, { delay: 150 });
        cy.get('input[formcontrolname="email"]').type(email, { delay: 150 });

        cy.get('#mat-mdc-checkbox-1-input').click();
        cy.wait(2000);

        cy.get('button[type="submit"]').should('not.be.disabled').click();

        cy.wait(5000)

        const token = '/075c5346a492297458b031f681a6c61687b2240e93b16d5f381a56aade989cc568b9a7b02f2f7d1e780ec7b3012d93e3d79fb22f66da70a40c2d892f991b61d1'
        // Aquí usas cy.origin para entrar al segundo dominio
        cy.origin('https://pago-qa.conceptopagos.com',{args: {token}}, ({token}) => {
            cy.visit(token);

            cy.contains('Detalle del pago').should('exist');

            let numTarjeta = '4000000000002370'
            let fechaVencimiento = '1227'
            let cvv = '311'
            let nombre = 'Franco'
            let apellido = 'Escamilla'

            cy.get('#mat-input-3').type(numTarjeta, { delay: 150 });

            cy.get('#mat-input-4').type(fechaVencimiento, { delay: 150 })

            cy.get('#mat-input-0').type(cvv, { delay: 150 })

            cy.get('#mat-input-1').type(nombre, { delay: 150 })

            cy.get('#mat-input-2').type(apellido, { delay: 150 })

            cy.get('#mat-input-7').click();

            cy.contains('label.mdc-label', '1 jul 2025 - 15 jul 2025').click();

            cy.contains('button', 'Aceptar').click();

            cy.get('img.icon-pay-button').click();

            cy.contains('Tu pago se realizó exitosamente').should('be.visible');



        });
    });

    it('Primer formulario para pagar el pago recurrente Excepciones', () => {

        const nombre = 'Fernand65765';
        const telefono = '5647356';
        const email = 'fernandogmailprueba.com';

        // Ya estás en el dominio de link-qa, así que aquí no se necesita cy.origin()
        cy.visit('https://link-qa.conceptopagos.com/recurring-charges/4ee31ed1747eab5b39be0522bcdf1d849d47de56bc6ef997ffdf8b64c57c9b156be3cad4106e9db871bc8ac32d876b0874eb0e99bde0d4e0abebdb0262016018');

        cy.get('input[formcontrolname="name"]').type(nombre, { delay: 150 }).blur();

        cy.get('input[formcontrolname="telephone"]').type(telefono, { delay: 150 });
        cy.get('input[formcontrolname="email"]').type(email, { delay: 150 });

        cy.get('#mat-mdc-checkbox-1-input').click();
        cy.wait(2000);

        cy.get('button[type="submit"]').should('be.disabled');


    });

    it('Segundo formulario para pagar el pago recurrente Excepciones', () => {


        // Ya estás en el dominio de link-qa, así que aquí no se necesita cy.origin()
        cy.visit('https://pago-qa.conceptopagos.com/ff224148190cf5f2b51045a0217cca4174b50e9550398ac4f241f3ba8250af30446b352a4072577e5cdd3ba06a0765e100406c15f07c60ecafd4464443ff0d75');


        cy.get('#mat-input-3').type('52000000000490', { delay: 150 });

        cy.get('#mat-input-4').type('127', { delay: 150 })

        cy.get('#mat-input-0').type('31', { delay: 150 })

        cy.get('#mat-input-1').type('Fernando76786', { delay: 150 })

        cy.get('#mat-input-2').type('56552736', { delay: 150 })

        cy.get('button.pay-button').should('be.disabled')

    });
});

