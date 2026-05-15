describe('ExcepcionesLogin', () => {

  const Link = 'https://auth-qa.conceptopagos.com/sso/realms/CMmobile/protocol/openid-connect/auth?client_id=Client_Front_Portal&redirect_uri=https%3A%2F%2Fdashboard-qa.conceptopagos.com%2Fprofile&state=0eaef5fc-cd72-47e4-9895-9ce59cd19e37&response_mode=fragment&response_type=code&scope=openid&nonce=de7e957a-88e9-4e40-ae8d-a789c7d65f5f&code_challenge=oXaj1JMRN5HCDuzojQK4ebPBfiUQUSRbG03q1JTOjjs&code_challenge_method=S256'

  beforeEach(() => {
    cy.visit(Link);
  })

  //Validar que sirva el icono del ojito
  
  it('Validar visibilidad de la contraseña al hacer clic en el ojito', () => {

    // Ingresar usuario y contraseña
    cy.get('#username')
      .type('fernando.arvizu@conceptomovil.com', { delay: 100 });

    cy.get('#txtPassword')
      .type('@Popodecaballo080800', { delay: 100 });

    // Verificar que el campo sea inicialmente de tipo password
    cy.get('#txtPassword')
      .should('have.attr', 'type', 'password');

    // Hacer clic en el ícono del ojito
    cy.get('#togglePasswordVisibility') // <-- Reemplaza esto con el selector real del botón ojito
      .click({ force: true }, {delay:100});

    // Verificar que ahora el campo sea de tipo text (contraseña visible)
    cy.get('#txtPassword')
      .should('have.attr', 'type', 'text');

    // (Opcional) Volver a ocultar la contraseña si el botón es toggle
    cy.get('#togglePasswordVisibility')
      .click({ force: true }, {delay:100});

    cy.get('#txtPassword')
      .should('have.attr', 'type', 'password');
  });



  //Se valida que no permita ingresar sesión sin ingresar correo o contraseña
  it('Excepcion ValidarBotonInicioSesión', () => {

    cy.pause()

    cy.get('#loginButton').click()

    cy.get('.pf-c-alert__title')
      .contains('Usuario o contraseña incorrectos.')
      .should('be.visible')

  })



  //Se valida que aparezca la leyenda de llenar captcha cuando no se selecciona
  it('Excepcion ValidarSellecionarCaptcha', () => {

    cy.get('#username')
      .type('fernando.arvizu@conceptomovil.com', { delay: 100 })

    cy.get('#txtPassword')
      .type('@Popodecaballo080800', { delay: 100 })

    cy.get('#loginButton')
      .click()

    cy.get('.pf-c-alert__title')
      .contains('Debe llenar el captcha')
      .should('be.visible')

  })


  //Inicio de sesión con correo erróneo
  it('Excepcion CorreoIncorrecto', () => {
    cy.get('#username').type('fernando.com', { delay: 100 }) //Se ingresa un correo erróneo

    cy.get('#txtPassword')
    .type('@Popodecaballo080800', { delay: 100 }) //Se ingresa la contraseña correcta

    cy.pause()

    cy.get('#loginButton').click()

    cy.get('.pf-c-alert__title').contains('Usuario o contraseña incorrectos.')
      .should('be.visible')
  })



  //Inicio de sesión con contraseña incorrecta
  it('Excepcion ContraseñaIncorrecto', () => {
    cy.get('#username').type('fernando.arvizu@conceptomovil.com', { delay: 100 }) //Se ingresa un correo correcto

    cy.get('#txtPassword').type('contraseñaIncorrecta', { delay: 100 }) //Se ingresa la contraseña incorrecta

    cy.pause()

    cy.get('#loginButton').click()

    cy.get('.pf-c-alert__title').contains('Usuario o contraseña incorrectos.')
      .should('be.visible')
  })




  //Happy Path del Login
  it('Visitar una página web ', () => {

    cy.get('#username')
      .type('fernando.arvizu@conceptomovil.com', { delay: 100 })

    cy.get('#txtPassword')
      .type('@Popodecaballo080800', { delay: 100 })

    cy.pause()

    cy.get('#loginButton')
      .click()

    cy.pause()

    cy.get('#kc-login')
      .click()
  });

  //Validar ingresar correo y contraseña
  //Validar seleccionar el captcha
  //Validar ingresar correo incorrecto
  //Validar contraseña incorrecta


});