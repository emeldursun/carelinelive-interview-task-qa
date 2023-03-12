///<reference types = 'cypress'/>

export class LoginPage{

public landLoginPage(){
    cy.visit(Cypress.env('baseURL'))
}
public verifyLoginPage(){
    cy.get('[data-testid="Login"]').should('be.visible')
}

public verifySpinner(){
    cy.get('[data-testid="Spinner"]').should('be.visible')
}

public verifyIsSignInDisabled(){
    cy.get('[data-testid="Submit"]').should('be.disabled')
}
public verifyLoginPageUrl(){
    cy.url().should('contain','login')
}
public clickForgottenPassword(){
    cy.get('[data-testid="forgotten-passwordlink"]').click()
}
public landForgottenPassword(){
    cy.visit('http://localhost:4200/forgotten-password')
}

}


