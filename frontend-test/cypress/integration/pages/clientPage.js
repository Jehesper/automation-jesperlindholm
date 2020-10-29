/// <reference types="cypress" />

function createClient(cy, name, mail, phone){
    cy.get('.blocks > :nth-child(2) > .btn').click()
    cy.contains('Clients')
    cy.get('h2 > .btn').click()
    cy.contains('New Client')
    cy.get(':nth-child(1) > input').type(name)
    cy.get(':nth-child(2) > input').type(mail)
    cy.get(':nth-child(3) > input').type(phone)
    cy.get('.blue').click()

}
module.exports = {createClient}

