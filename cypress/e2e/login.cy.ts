///<reference types = 'cypress'/>
import { LoginPage } from "cypress/support/pages/LoginPage";
import { HomePage } from "cypress/support/pages/HomePage";
import { ForgottenPasswordPage } from "cypress/support/pages/ForgottenPasswordPage";
import { LocalStorage } from "typescript-web-storage";

describe('/login', () => {
let loginPage:LoginPage;
let homePage:HomePage;
let forgottenPasswordPage:ForgottenPasswordPage;
let localStorage:LocalStorage;
beforeEach(()=> {
    loginPage=new LoginPage();
    homePage=new HomePage();
    forgottenPasswordPage=new ForgottenPasswordPage();
    localStorage=new LocalStorage();
    cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))  
    
})
it('As a user, I need to be able to log in',()=>{
      
homePage.verifyHomePage();

})

it('As a user, I expected an indicator to be shown when logging in',()=>{

loginPage.verifySpinner();

})

// it('As a user, I shouldn\'t be able to click the "Sign In" if the form is invalid',()=>{
//    
//     loginPage.verifySpinner();
    
//     })

    it('As a user, I shouldn\'t be able to click the "Sign In" button once whilst the login request is in progress',()=>{
  
    loginPage.verifyIsSignInDisabled();
    
    
    })
    it('As a user, I need to be able to log out of the application',()=>{
        homePage.logOut();
        loginPage.verifyLoginPage(); 
        })
    it('As a user that\'s logged in, I should be redirected to the home page if I try to access the login page',()=>{ 
            cy.saveLocalStorage("authenticated","true");
            loginPage.landLoginPage();
            homePage.verifyHomePage();
            })  
    
    it('As a user that\'s logged in, I should be redirected to the home page if I try to access the password reset page',()=>{
        cy.saveLocalStorage("authenticated","true");
        loginPage.landForgottenPassword();
        homePage.verifyHomePage()
        })
});
