describe('Alta de modelos (terminales)', () => {

    it('Flujo para dar de alta un modelo o terminal Excepciones', () => {
        const Link = 'https://auth-qa.conceptopagos.com/sso/realms/Gestor/protocol/openid-connect/auth?client_id=Client_Gestor&redirect_uri=https%3A%2F%2Fgestor-qa.conceptopagos.com%2Fmerchants%2Fadd-client&state=415ef774-b0f9-4624-8368-34320b7a6c44&response_mode=fragment&response_type=code&scope=openid&nonce=8cc1643f-298d-4d93-9e1e-b782624bd579&code_challenge=tMHFzgAs9rHOQcMxamv8jW8CCuS6vPgXQmWtniQgErg&code_challenge_method=S256';


        const modelo = "A543LX8";
        const os = "OS";
        const adaptador = "//()89";
        const bateria = "178&/";

        cy.visit(Link);

        cy.get('input[name="username"]').type('miguelvergara393@gmail.com', { delay: 100 });
        cy.get('input[name="password"]').type('MiguelVergara2025!!', { delay: 100 });
        cy.get('#kc-login').click();

        cy.pause();
        cy.get('#kc-login').click();

        cy.wait(4000);

        cy.origin('https://gestor-qa.conceptopagos.com', { args: { modelo, os, adaptador, bateria} }, ({ modelo, os, adaptador, bateria }) => {

            cy.contains('mat-label', 'Terminales')
                .parents('div.mat-tree-node')
                .find('button')
                .click();

            cy.contains('mat-label', 'Alta modelos').click();
            cy.wait(2000);

            cy.get('svg.ng-tns-c1711764913-18').click();

            cy.get('body').click(0, 0);

            cy.contains('mat-label', 'Modelo').type(modelo, {delay:100})

            cy.get('svg.ng-tns-c1711764913-21').click();
            cy.get('body').click(0, 0);

            cy.contains('mat-label', 'OS').type(os, {delay:100})

            cy.contains('mat-label', 'Adaptador').type(adaptador, {delay:100})

            cy.get('svg.ng-tns-c1711764913-25').click();
            cy.get('body').click(0, 0);

            cy.get('svg.ng-tns-c1711764913-27').click();
            cy.get('body').click(0, 0);

            cy.get('svg.ng-tns-c1711764913-29').click();
            cy.get('body').click(0, 0);

            cy.contains('mat-label', 'Batería').type(bateria, {delay:100})

            cy.contains('button', 'Guardar').click();

        })
    })

    it('Flujo para dar de alta un modelo o terminal Happy Path', () => {
        const Link = 'https://auth-qa.conceptopagos.com/sso/realms/Gestor/protocol/openid-connect/auth?client_id=Client_Gestor&redirect_uri=https%3A%2F%2Fgestor-qa.conceptopagos.com%2Fmerchants%2Fadd-client&state=415ef774-b0f9-4624-8368-34320b7a6c44&response_mode=fragment&response_type=code&scope=openid&nonce=8cc1643f-298d-4d93-9e1e-b782624bd579&code_challenge=tMHFzgAs9rHOQcMxamv8jW8CCuS6vPgXQmWtniQgErg&code_challenge_method=S256';

        const opcionesProveedor = ['DSPREAD', 'NEXGO'];
        const proveedor = opcionesProveedor[Math.floor(Math.random() * opcionesProveedor.length)];

        const opcionesTipoTerminal = ['Mpos', 'SmartPos']
        const tipoTerminal = opcionesTipoTerminal[Math.floor(Math.random() * opcionesTipoTerminal.length)]

        const opcionesChip = ['Si', 'No']
        const chip = opcionesChip[Math.floor(Math.random() * opcionesChip.length)]

        const opcionesGPS  = ['Si', 'No']
        const GPS = opcionesGPS[Math.floor(Math.random() * opcionesGPS.length)]

        const opcionesBluetooth  = ['Si', 'No']
        const bluetooth = opcionesGPS[Math.floor(Math.random() * opcionesBluetooth.length)]

        const modelo = "A543LX8";
        const os = "OS01";
        const adaptador = "Adaptador";
        const bateria = "Bateria";

        cy.visit(Link);

        cy.get('input[name="username"]').type('miguelvergara393@gmail.com', { delay: 100 });
        cy.get('input[name="password"]').type('MiguelVergara2025!!', { delay: 100 });
        cy.get('#kc-login').click();

        cy.pause();
        cy.get('#kc-login').click();

        cy.wait(4000);

        cy.origin('https://gestor-qa.conceptopagos.com', { args: { modelo, os, adaptador, bateria, proveedor, tipoTerminal, chip,GPS, bluetooth } }, ({ modelo, os, adaptador, bateria, proveedor, tipoTerminal, chip, GPS, bluetooth }) => {

            cy.contains('mat-label', 'Terminales')
                .parents('div.mat-tree-node')
                .find('button')
                .click();

            cy.contains('mat-label', 'Alta modelos').click();
            cy.wait(2000);

            cy.get('svg.ng-tns-c1711764913-18').click();

            cy.contains('mat-option', proveedor).click();

            cy.contains('mat-label', 'Modelo').type(modelo, {delay:100})

            cy.get('svg.ng-tns-c1711764913-21').click();

            cy.contains('mat-option', tipoTerminal).click();

            cy.contains('mat-label', 'OS').type(os, {delay:100})

            cy.contains('mat-label', 'Adaptador').type(adaptador, {delay:100})

            cy.get('svg.ng-tns-c1711764913-25').click();

            cy.contains('mat-option', chip).click()

            cy.get('svg.ng-tns-c1711764913-27').click();

            cy.contains('mat-option', GPS).click()

            cy.get('svg.ng-tns-c1711764913-29').click();

            cy.contains('mat-option', bluetooth).click()

            cy.contains('mat-label', 'Batería').type(bateria, {delay:100})

            cy.contains('button', 'Guardar').click();

            cy.contains('button', 'Cancelar').click();

        })
    })
})