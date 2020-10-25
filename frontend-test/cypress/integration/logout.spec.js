/// <reference types="cypress" />


describe('Logout', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Logout', () => {
        cy.get(':nth-child(1) > input').click().type('tester01'), //correct
        cy.get(':nth-child(2) > input').click().type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c'),//correct
        cy.get('.btn').click(),
        cy.contains('Tester Hotel Overview'),
        cy.get('.user > .btn').click(),
        cy.contains('Login')

    })



 
})