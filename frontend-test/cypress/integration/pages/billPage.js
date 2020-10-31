/// <reference types="cypress" />
var amount = 2000

function createBill(cy){
   


    cy.get(':nth-child(3) > .btn').click()
    cy.contains('Bill')
    cy.get('h2 > .btn').click() 
    cy.contains('New Bill')
    cy.get('input').type(amount)
    cy.get('.checkbox').click()
    cy.get('.blue').click()
    cy.contains('Bills')
    cy.contains(amount)
}


module.exports = {
    createBill}

