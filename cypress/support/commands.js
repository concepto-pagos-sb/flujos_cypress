Cypress.Commands.add('Login',()=>{
   
   const Link = 'https://auth-qa.conceptopagos.com/sso/realms/CMmobile/protocol/openid-connect/auth?client_id=Client_Front_Portal&redirect_uri=https%3A%2F%2Fdashboard-qa.conceptopagos.com%2Fmy-business%2Fbusiness-information&state=75f61b98-d267-4e1b-acae-c44ba9738121&response_mode=fragment&response_type=code&scope=openid&nonce=df1f8583-8842-41c0-b68e-535e75faa344&code_challenge=FM7eD05NMjv7zTk9BzldGel3pWVUaDAEoSHrUv1a8k0&code_challenge_method=S256'
    cy.visit(Link);  // Cambia por la URL de tu preferencia
    cy.get('#username').type('miguel.vergara@conceptomovil.com', { delay: 100 })
    cy.get('#txtPassword').type('MiguelVergara2026!!', { delay: 100 })
    cy.pause()
    cy.get('#loginButton').click({ delay: 100 })
    cy.pause()
    cy.get('#kc-login').click()
})
//Login Portal de clientes

Cypress.Commands.add('login_portal', () => {
  cy.session('usuario-logueado', () => {
        cy.visit('https://auth-qa.conceptopagos.com/sso/realms/CMmobile/protocol/openid-connect/auth?client_id=Client_Front_Portal&redirect_uri=https%3A%2F%2Fdashboard-qa.conceptopagos.com%2F&state=e5ba225c-7095-4d01-bb4d-12778dd2e044&response_mode=fragment&response_type=code&scope=openid&nonce=782ca235-4934-4467-8bcc-f9a3db8e37d8&code_challenge=-sszYCvR1Q1eJEteZIt4UDmcXiyDx5Ae-qlOkPihxYc&code_challenge_method=S256');
        cy.get('input[placeholder="usuario@correo.com"]').click({force:true}).type('miguel.vergara@conceptomovil.com',{delay:100});  
        cy.get('input[placeholder="************"]').click({force:true}).type('Desarrollo8*',{delay:100});
        cy.pause(); //marca captcha
        cy.get('button[class="submit full button-primary"]').click({force:true});
        cy.pause();//ingresar codigo
        cy.get('button[class="button-primary verify-button"]').click({force:true});
         }, {
    cacheAcrossSpecs: true
  })
})
    

 //LOGIN SESSION
Cypress.Commands.add('Loginss', () => {
  cy.session('miguel.vergara@conceptomovil.com', () => {
    const Link = 'https://auth-qa.conceptopagos.com/sso/realms/CMmobile/protocol/openid-connect/auth?client_id=Client_Front_Portal&redirect_uri=https%3A%2F%2Fdashboard-qa.conceptopagos.com%2Fmy-business%2Fbusiness-information&state=75f61b98-d267-4e1b-acae-c44ba9738121&response_mode=fragment&response_type=code&scope=openid&nonce=df1f8583-8842-41c0-b68e-535e75faa344&code_challenge=FM7eD05NMjv7zTk9BzldGel3pWVUaDAEoSHrUv1a8k0&code_challenge_method=S256';
    cy.visit(Link);
    cy.get('#username').type('miguel.vergara@conceptomovil.com', { delay: 100 });
    cy.get('#txtPassword').type('Desarrollo8!!', { delay: 100 });
    cy.pause(); 
    cy.get('#loginButton').click({ delay: 100 });
    cy.pause();
    cy.get('#kc-login').click();
  });
});

Cypress.Commands.add('LoginGestor', () => {
  cy.session('usuario-gestorpruebas1', () => {
    const Link = 'https://auth-qa.conceptopagos.com/sso/realms/Gestor/protocol/openid-connect/auth?client_id=Client_Gestor&redirect_uri=https%3A%2F%2Fgestor-qa.conceptopagos.com%2Fmerchants&state=486afafb-b762-4c2f-b893-693a54c893b9&response_mode=fragment&response_type=code&scope=openid&nonce=507d135b-9335-4caa-a833-93904d034295&code_challenge=_Z483qAjZ3mrDohfIHkssvJmpjQITKWsBh8yc2ev7jA&code_challenge_method=S256';
    cy.visit(Link);
    cy.get('#username').type('miguelvergara393@gmail.com', { delay: 100 });
    cy.get('#password').type('MiguelVergara2026**', { delay: 100 });
    cy.get('#kc-login').click({ delay: 100 });
    cy.pause()//poner codigo
    cy.get('#kc-login').click({force:true});
  //  cy.url({ timeout: 30000 }).should('include', '/dashboard');
  });
});



