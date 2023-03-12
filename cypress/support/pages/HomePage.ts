///<reference types = 'cypress'/>
/// <reference types="cypress-xpath" />

export class HomePage{
public verifyHomePage(){
    cy.get('[data-testid="Home"]').should('be.visible')
}
public logOut(){
    cy.get('[data-testid="Logout"]').click()
}
// public verifyLogout(){
//     cy.get('[data-testid="Home"]')
// }
public verifyHomePageUrl(){
    cy.url().should('not.contain','login')
}

public verifyUserEmailMessage(){
    //burada emaili dynamic yap
    cy.get('[data-testid="userGreeting"]').should('contain','test@carelinelive.com')
}
public verifyTodoList(){
    cy.get('[data-testid="TodoList"]').should('contain','Todo List')
}
public verifyAddTask(){
    cy.get('[data-testid="AddTaskButton"]').click()
    cy.get('[data-testid="AddTaskInput"]').should('be.visible')
}

public verifyCancelAddingTask(){
    cy.get('[data-testid="AddTaskButton"]').click()
    cy.get('[data-testid="ClearAddTask"]').click()
    cy.get('[data-testid="AddTaskInput"]').should('not.exist')
}

public verifyAddTaskDisabled(){
    cy.get('[data-testid="AddTaskButton"]').click()
    cy.get('[data-testid="AddTaskInput"]').should('be.visible')
    cy.get('[data-testid="SubmitAddTask"]').should('be.disabled')
}

public MarkAsDone(){
    cy.get('[data-testid="CheckCircle"]:first').click()
}

public verifyUndoIcon(){
    cy.get('[data-testid="CheckCircle"]:first').click()
    cy.get('[data-testid="CheckUndo"]:first').contains('undo')
}

public verifyTaskInputRequiredError(){
    cy.get('[data-testid="AddTaskInput"]').click()
    cy.get('[data-testid="SubmitAddTask"]').click({force: true})
    cy.get('[data-testid="RequiredError"]').should('contain','Required')
}

public markAllAsDone(){
    cy.get('[data-testid="MarkAllAsDone"]').click()
}
public verifyTaskAsDone(){
    cy.get('[data-testid="CheckUndo"]:first').contains('undo')
}
public verifyMarkAsNotDone(){
    cy.get('[data-testid="CheckUndo"]:first').click()
    cy.get('[data-testid="CheckCircle"]:first').contains('check_circle')
}
public editTask(){
    cy.get('[data-testid="EditIcon"]:first').click()
    cy.get('[data-testid="EditFormInputBox"]').click().clear().type("Editing Verification")
    cy.get('[data-testid="EditCheckIcon"]').click()
}
public verifyTaskEdited(){
    cy.get('[data-testid="Tasks"]:first').should('contain','Editing Verification')
}
}