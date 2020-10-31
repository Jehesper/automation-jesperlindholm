/// <reference types="cypress" />

var clientPage = '.blocks > :nth-child(2) > .btn'
var nameFeild = ':nth-child(1) > input'
var mailFeild = ':nth-child(2) > input'
var phoneFeild = ':nth-child(3) > input'
var url = 'http://localhost:3000/client/new'

//Creates a client with values passed in parameters
function createClient(cy, name, mail, phone){
    cy.get(clientPage).click()
    cy.contains('Clients')
    cy.get('h2 > .btn').click()
    cy.contains('New Client')
    cy.url().should('eq', url)
    cy.get(nameFeild).type(name)
    cy.get(mailFeild).type(mail)
    cy.get(phoneFeild).type(phone)
    cy.get('.blue').click()

    cy.contains(name)
    cy.contains(mail)
    cy.contains(phone)

}
module.exports = {createClient}

