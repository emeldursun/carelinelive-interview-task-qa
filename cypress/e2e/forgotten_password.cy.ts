///<reference types = 'cypress'/>
import { ForgottenPasswordPage } from "cypress/support/pages/ForgottenPasswordPage";
import { LoginPage } from "cypress/support/pages/LoginPage";
describe('/forgotpassword', () => {
    let forgottenPasswordPage:ForgottenPasswordPage;
    let loginPage:LoginPage;

beforeEach(()=> {
    forgottenPasswordPage=new ForgottenPasswordPage();
    loginPage=new LoginPage();
    loginPage.landLoginPage();
    loginPage.clickForgottenPassword();
})

it('As a user that\'s forgotten their password, I need to be able to submit the password reset form',()=>{
   
    forgottenPasswordPage.inputForgottenPasswordEmail();
    forgottenPasswordPage.submitResetPassword();
    forgottenPasswordPage.verifyEmailSentPage();
    
    })

it('As a user, I should not be able to submit the form if the inputs are invalid',()=>{
       
    forgottenPasswordPage.enterInvalidInputs();
    forgottenPasswordPage.verifyResetPasswordDisabled();
        
    })
it('As a user, I should see an error message if I do not type anything',()=>{
            
    forgottenPasswordPage.blankForgottenPasswordEmail();
    forgottenPasswordPage.verifyEmailRequiredErrorVisible();
            
    })

it('As a user, I should see an error message if I do not enter a valid email address',()=>{
        
    forgottenPasswordPage.enterInvalidInputs();
    forgottenPasswordPage.verifyNotAValidEmailErrorVisible();
            
     })
    
















})
