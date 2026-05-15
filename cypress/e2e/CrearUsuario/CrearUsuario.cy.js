describe("CrearUsuario", () => {

  const Link = 'https://auth-qa.conceptopagos.com/sso/realms/CMmobile/protocol/openid-connect/auth?client_id=Client_Front_Portal&redirect_uri=https%3A%2F%2Fdashboard-qa.conceptopagos.com%2Fprofile&state=0eaef5fc-cd72-47e4-9895-9ce59cd19e37&response_mode=fragment&response_type=code&scope=openid&nonce=de7e957a-88e9-4e40-ae8d-a789c7d65f5f&code_challenge=oXaj1JMRN5HCDuzojQK4ebPBfiUQUSRbG03q1JTOjjs&code_challenge_method=S256'

  beforeEach(() => {
    cy.visit(Link);
  });

  // Happy Path del Login
  it('Visitar una página web ', () => {

    cy.Login();

    cy.origin('https://dashboard-qa.conceptopagos.com', () => {

      // VALIDACIÓN DE INGRESO AL DASHBORAD
      cy.location('origin', { timeout: 20000 }).should('eq', 'https://dashboard-qa.conceptopagos.com');
      cy.url().should('include', 'dashboard-qa.conceptopagos.com');

      // *************************** POP UP NOTIFICACION **************************************/
      cy.get('mat-dialog-container', { timeout: 20000 }).then(($popupnoti) => {
        if ($popupnoti.length > 0 && $popupnoti.is(':visible')) {
          cy.get('button.button-primary.px-3.close-button', { timeout: 10000 })
            .contains('DESCUBRELO')
            .click({ delay: 100 });
        } else {
          cy.log('No hay pop-up visible');
        }
      });

      // **************************** Barra lateral ********************************/
      cy.get('.mat-drawer.mat-sidenav', { timeout: 20000 }).should(($el) => {
        const style = $el.attr('style')
        expect(style).to.include('visibility: visible')
        expect(style).to.include('transform: none')
      });

      cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click();
      cy.wait(3000);
      cy.get('.mat-icon.notranslate.icon-menu.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted').click();

      // ************************** SELECCIÓN MODULO DE DATOS DEL NEGOCIO *******************************/
      cy.contains('span', ' Usuarios ', { timeout: 10000 }).click();
      cy.wait(2000);

      // ****************************IMPLEMENTACIÓN DE LA LÓGICA AGREGAR USUARIO *************************/

      //Se da click en el botón "crear nuevo". Esto lanza un form
      cy.get('button.add-user-button', { timeout: 10000 }).first().click();
      cy.wait(2000);

      // Listas para usar aleatoriamente
      const nombres = ['Alex', 'María', 'Luis', 'Camila', 'Jorge'];
      const apellidosPaterno = ['Torres', 'Ramírez', 'Gómez', 'Díaz', 'Mendoza'];
      const apellidosMaterno = ['Luna', 'Martínez', 'Rojas', 'Pérez', 'Vargas'];
      const correos = ['correo1@gmail.com', 'correo2@yahoo.com', 'correo3@hotmail.com', 'correo4@hotmail.com'];
      const telefonos = ['5678905467', '5512345678', '4421239876', '3339876543'];

      // Función para obtener un elemento aleatorio
      const alAzar = (lista) => lista[Math.floor(Math.random() * lista.length)];

      const nombre = alAzar(nombres);
      const paterno = alAzar(apellidosPaterno);
      const materno = alAzar(apellidosMaterno);
      const correo = alAzar(correos);
      const telefono = alAzar(telefonos);
      //Se comienza a llenar los inputs
      //Nombre
      cy.get('input[formcontrolname="name"]').type(nombre, { delay: 100 });

      //Apellido paterno
      cy.get('input[formcontrolname="lastName"]').type(paterno, { delay: 100 })

      //Apellido materno
      cy.get('input[formcontrolname="secondLastName"]').type(materno, { delay: 100 })

      //Correo electrónico
      cy.get('input[formcontrolname="email"]').type(correo, { delay: 100 })

      //Teléfono
      cy.get('input[formcontrolname="phoneNumber"]').type(telefono, { delay: 100 })

      //////////////////////////////PARA INGRESAR UN ROL//////////////////////////////

      //Seleccionar rol
      // Paso 1: definir los valores posibles
      const roles = ['CUSTOMER_PORTAL_ADMINISTRATOR', 'CUSTOMER_PORTAL_SELLER', 'CUSTOMER_PORTAL_FINANCE', 'CUSTOMER_PORTAL_MANAGER'];

      // Paso 2: elegir uno al azar
      const randomRole = roles[Math.floor(Math.random() * roles.length)];

      // Paso 3: seleccionar el valor en el select
      cy.get('select[formcontrolname="rol"]:visible', { timeout: 10000 }).select(randomRole);




      cy.contains('button', 'Guardar').click();
      cy.wait(2000);

      cy.get('.mat-mdc-snack-bar-label', { timeout: 3000 })
      .should('be.visible')
      .and('contain.text', 'Se ha agregado el usuario correctamente');





    }); // cierre de cy.origin

  }); // cierre de it

}); // cierre de describe
