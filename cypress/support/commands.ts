/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(email:string, password:string): Chainable<void>;
      saveLocalStorage(key:string,value:string):Chainable<void>
      restoreLocalStorage(key:string):Chainable<void>
    }
  }
//
//
// -- This is a child command --
Cypress.Commands.add('login', (email:string, password:string) => { 
  
    cy.visit(Cypress.env('baseURL'))
    cy.get('[data-testid="Email"]').type(email) 
    cy.get('[data-testid="Password"]').type(password)
    cy.get('[data-testid="Submit"]').click()
  
})

Cypress.Commands.add("saveLocalStorage",(key,value)=>{
  sessionStorage.setItem(key,value)

});







//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }