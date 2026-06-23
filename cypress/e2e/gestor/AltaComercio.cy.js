import { faker, tr } from "@faker-js/faker";
import { fakerES } from '@faker-js/faker';

describe('Alta de comercio', ()=> {
    beforeEach(()=>{
        cy.LoginGestor();
    })
    it('alta comercio',()=>{
        cy.viewport(1920, 1080);
        const nombre = fakerES.person.lastName().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        const numero =Math.floor(Math.random()*1000)+1;
        const numero_6=faker.number.int({min:5500000000, max:5599999999});
        const apellido1 = fakerES.person.lastName().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        const apellido2 = faker.person.lastName();
        const correo = faker.internet.email();

     

        cy.visit('https://gestor-qa.conceptopagos.com/dashboard');
        cy.get('body').click(23.99,23.99);
        cy.contains('Administracion de comercios').click({force:true});
        cy.contains('button','Alta de Comercio').click({force:true});
        cy.wait(3000);
        cy.get('mat-select[formcontrolname="customer_id"]').click({force:true});
        cy.contains('Bonbon').click({force:true});
        cy.get('input[formcontrolname="name"]').click({force:true}).type('Tienda de '+ nombre,{force:true},{delay:500});
        cy.get('input[formcontrolname="street"]').click({force:true}).type('Calle '+ numero,{delay:500});
        cy.wait(3000);
        cy.get('input[formcontrolname="street_number"]').click({force:true}).type(numero,{delay:500});
        cy.get('input[formcontrolname="postal_code"]').click({force:true}).type("57000",{delay:500});
        cy.window().then((win)=> {
            win.scrollBy(0, -200);
        });
        cy.wait(1000);
        cy.contains('Colonia').click({force:true});
        cy.contains('Benito Juarez (La Aurora)').click({force:true});
        cy.wait(1000);
        
        cy.get('input[formcontrolname="contact_phone"]').click({force:true}).type(numero_6,{delay:500});
        cy.get('input[formcontrolname="billing_phone"]').click({force:true}).type("1234567899",{delay:100});
        cy.get('input[formcontrolname=business_phone]').click({force:true}).type('5512331299',{delay:100});
        cy.get('input[formcontrolname="merchant_url"]').click({force:true}).type('www.negocio.com',{delay:100});
        cy.contains('Giro').click({force:true});
        cy.get('mat-option').contains('Tiendas, autoservicio y minisuper').click({force:true});
        cy.wait(2000);
        cy.get('mat-select[formcontrolname="business_activity_id"]').click({force:true});
        cy.contains('Farmacia').click({force:true});

        cy.get('input[formcontrolname="user_name"]').click({force:true}).type(nombre,{delay:100});
        cy.get('input[formcontrolname="first_last_name"]').click({force:true}).type(apellido1,{delay:100});
        cy.get('input[formcontrolname="second_last_name"]').click({force:true}).type(apellido1,{delay:100});
        cy.get('input[formcontrolname="email"]').click({force:true}).type(`${nombre}12@yopmail.com`, { delay: 100 })
        cy.get('input[formcontrolname="cell_phone_number"]').click({force:true}).type(numero_6,{delay:100});
        cy.get('input[formcontrolname="clabe"]').click({force:true}).type('012392929292992299',{delay:100});
        cy.get('input[formcontrolname="holder_name"]').click({force:true}).type(nombre);

        cy.wait(3000);

        cy.get('mat-select[formcontrolname="tax_payer_type_id"]').click({force:true});
        cy.contains('Persona moral').click({force:true});
        cy.get('input[formcontrolname="rfc"]').click({force:true}).type('PELJ890512H12');
        cy.get('input[formcontrolname="billing_name"]').click({force:true}).type('Negocio S.A de C.V',{delay:100});
        cy.get('input[formcontrolname="billing_postal_code"]').click({force:true}).type('07600');
        cy.get('mat-select[formcontrolname="sat_regime_id"]').click({force:true});
        cy.contains('General de Ley Personas Morales').click({force:true});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="sat_cfdi_usage_id"]').click({force:true});
        cy.contains('Pagos').click({force:true});
        cy.get('input[formcontrolname="billing_email"]').click({force:true}).type(correo,{delay:100});
        cy.get('mat-select[formcontrolname="mcc"]').click({force:true});
        cy.contains('AUTOSERVICIOS').click({force:true});
        cy.get('mat-select[formcontrolname="acquiring_bank_id"]').click({force:true});
        cy.contains('Banregio').click({force:true});
        cy.get('mat-select[formcontrolname="affilation_type"]').click({force:true});
        cy.contains('Esquema 4').click({force:true});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="transactional_profile_id"]').click({force:true});
        cy.wait(1000);
        cy.contains('perfil de Verlie').click({force:true});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="payment_processor_id"]').click({force:true});
        cy.contains('Colecto Banregio').click({force:true});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="logical_network_id"]').click({force:true});
        cy.wait(1000);
        cy.contains('0000000 ').click({force:true});
        cy.wait(1000);
        cy.get('input[type="checkbox"]').eq(0).check({force: true });
        cy.get('input[formcontrolname="payment_link_amount_max_day"]').click({force:true}).type('10000',{delay:100});
        cy.get('input[type="checkbox"]').eq(0).check({force: true });
        cy.get('input[formcontrolname="payment_link_amount_max_day"]').click({force:true}).type('10009',{delay:100});
        cy.get('input[type="checkbox"]').eq(1).check({force: true });
        cy.get('input[formcontrolname="payment_link_amount_max_month"]').click({force:true}).type('200000',{delay:100});

        cy.get('mat-select[formcontrolname="pl_affilation_type"]').click({force:true});
        cy.contains(' Esquema 4 - Afiliacion unica por agregador ').click({force:true});
        cy.wait(1000);
        cy.get('mat-select[formcontrolname="paymentL_affiliation_id"]').click({force:true});
        cy.contains('LINK964748 - Comercio de Alo Abejitas ').click({force:true});
        

        
        cy.wait(1000);
        //cy.contains('63634 - Comercios generales').click({force:true});
        cy.get('input[formcontrolname="paymentL_id_channel"]').click({force:true}).type('8T4DVDXJ',{delay:1000});
        cy.get('input[formcontrolname="payment_link_amount_min"]').click({force:true}).type('5',{delay:100});
        cy.get('input[formcontrolname="payment_link_amount_max"]').click({force:true}).type('10000',{delay:100});
        
        cy.get('input[formcontrolname="paymentL_bank_rate_credit"]').click({force:true}).type('3',{delay:100});
        cy.get('input[formcontrolname="paymentL_bank_rate_debit"]').click({force:true}).type('3',{delay:100});
        cy.get('input[formcontrolname="paymentL_bank_rate_international"]').click({force:true}).type('3',{delay:100});

        cy.get('input[formcontrolname="paymentL_merchant_rate_credit"]').click({force:true}).type('3',{delay:100});
        cy.get('input[formcontrolname="paymentL_merchant_rate_debit"]').click({force:true}).type('3',{delay:100});
        cy.get('input[formcontrolname="paymentL_merchant_rate_international"]').click({force:true}).type('3',{delay:100});

        cy.get('input[formcontrolname="paymentL_business_comission_credit"]').click({force:true}).type('3',{delay:100});
        cy.get('input[formcontrolname="paymentL_business_comission_debit"]').click({force:true}).type('3',{delay:100});
        cy.get('input[formcontrolname="paymentL_business_comission_international"]').click({force:true}).type('3',{delay:100});
        
        
        cy.scrollTo('bottom');   
        cy.pause();     
        //prueba dobles clic//
        cy.contains('Guardar').click({force:true});
        /*let j=0;
        while(j<2)
        {
        cy.contains('Guardar').click({force:true});
            j++;
        }*/

        cy.wait(5000);
        cy.contains('mat-icon','edit').click({force:true});
        cy.wait(3000);
        cy.get('mat-select[formcontrolname="transactional_profile_id"]').click({force:true});
        cy.wait(5000);
        cy.contains('DEFAULT_PROFILE').click({force:true});
        cy.scrollTo('bottom');
        cy.contains('Guardar').click();
        /*
        //Buscar por  comercio
        cy.get('input[formcontrolname="search"]').click({force:true}).type('Tiendas Don panchito',{delay:100});
        cy.contains('button','Buscar').click({force:true});
        cy.wait(4000);
        //Limpiar registros
        cy.get('mat-icon[mattooltip="Limpiar"]').click({force:true});
        cy.wait(2000);
        //Buscar por Id de comercio
        cy.get('input[formcontrolname="searchID"]').click({force:true}).type('06E049ECB71347',{delay:100});
        cy.contains('button','Buscar').click({force:true});
        //activar y desactivar llaves
        let i=0;
        while(i<2)
        {
        cy.get('button[role="switch"]').click();
        };
        */
    })
})