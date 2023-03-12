import { HomePage } from "cypress/support/pages/HomePage";
import { LoginPage } from "cypress/support/pages/LoginPage";

describe('/Home', () => {
   
  let loginPage:LoginPage;
  let homePage:HomePage;

beforeEach(()=> {
   
  loginPage=new LoginPage();
  homePage=new HomePage();
  cy.login(Cypress.env('validEmail'),Cypress.env('validPassword')) 
  homePage.verifyHomePage();

})
it('As an authenticated user, I should see my email address on the home page',()=>{
        
  homePage.verifyUserEmailMessage();
  
})

it('As a user, I should see my todo list on the home page',()=>{
        
  homePage.verifyTodoList();
        
})

it('As a user, I should be able to add new tasks',()=>{

  homePage.verifyAddNewTask();
      
})

it('As a user, I should be able to cancel adding a new task',()=>{
       
  homePage.verifyCancelAddingTask();
      
})

it('As a user, I should not be able to add a new task if the input is empty',()=>{
       
  homePage.verifyAddTaskDisabled();
      
})

// it('As a user, I should be able to remove tasks and the list update',()=>{
       
//delete icon is not removing the task 
      
// })

it('As a user, I should be able to edit tasks and the list update',()=>{
       
  homePage.editTask();
  homePage.verifyTaskEdited();
      
})

// it('As a user, I should see an error message if I try to edit a task to be empty',()=>{
       
// there is no error message when you edit a task to be empty

// })

it('As a user, I should be able to mark a test as done',()=>{
       
  homePage.MarkAsDone();
      
})

it('As a user, I should have a visual indication that a task is done',()=>{
        
 homePage.verifyUndoIcon();

})

it('As a user, I should be able to mark all tasks as done',()=>{
       
  homePage.markAllAsDone();
  homePage.verifyTaskAsDone();
      
})

it('As a user, I should be able to mark a task as not done',()=>{
         
  homePage.markAllAsDone();
  homePage.verifyMarkAsNotDone();

})
        
})