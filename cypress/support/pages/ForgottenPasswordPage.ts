///<reference types = 'cypress'/>

export class ForgottenPasswordPage{

    public verifyForgottenPasswordPage(){
        cy.get('[data-testid="ForgottenPassword"]').should('be.visible')
    }

    public landForgottenPasswordPage(){
        cy.visit(Cypress.env('resetPasswordURL'))
    }

public inputForgottenPasswordEmail(){
    cy.get('[data-testid="ForgottenPasswordEmail"]').type(Cypress.env('validEmail'))
}
public submitResetPassword(){
    cy.get('[data-testid="ResetPassword"]').click()
}
public verifyEmailSentPage(){
cy.get('[data-testid="EmailSent"]').should('be.visible')
}

public enterInvalidInputs(){
    cy.get('[data-testid="ForgottenPasswordEmail"]').type(Cypress.env('invalidEmail'))
}

public verifyResetPasswordDisabled(){
    cy.get('[data-testid="ResetPassword"]').should('be.disabled')

}
public verifyNotAValidEmailErrorVisible(){
    cy.get('[data-testid="ResetPassword"]').click({force: true})
    cy.get('[data-testid="EmailErrorMessage"]').should('be.visible').should('contain','Not a valid email address')
}
public blankForgottenPasswordEmail(){
    cy.get('[data-testid="ForgottenPasswordEmail"]').click()
}
public verifyEmailRequiredErrorVisible(){
    cy.get('[data-testid="ResetPassword"]').click({force: true})
    cy.get('[data-testid="EmailErrorMessage"]').should('be.visible').should('contain','Required')
}
}