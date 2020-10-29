/// <reference types="cypress" />

function createRoom(){

cy.get(':nth-child(1) > .btn').click()
cy.get('h2 > .btn').click()
cy.contains('New Room')

cy.get(':nth-child(1) > select').select('Single')
cy.get(':nth-child(2) > input').type('1')
cy.get(':nth-child(3) > input').type('2')
cy.get('.checkbox').click()
cy.get(':nth-child(5) > input').type('2000')

cy.get(':nth-child(6) > select').select('Sea View')
cy.get('.blue').click()
}
module.exports = {createRoom}