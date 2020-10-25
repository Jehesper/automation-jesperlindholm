/// <reference types="cypress" />


describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Log in page', () => {
        cy.contains('Login')
    })
    it('Requires username', () => {
        cy.contains('Username'),
        cy.get('.btn').click()
        cy.contains('Login')
    })
    it('Requires password', () => {
        cy.contains('Password'),
        cy.get('.btn').click()
        cy.contains('Login')
    })
    it('Incorrect username warning', () => {
        cy.get(':nth-child(1) > input').click().type('tester02'), //incorrect
        cy.get(':nth-child(2) > input').click().type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c'),//correct
        cy.get('.btn').click(),
        cy.get('.error').should ('contain', 'Bad username or password')
    })
    it('Incorrect password warning', () => {
        cy.get(':nth-child(1) > input').click().type('tester01'), //correct
        cy.get(':nth-child(2) > input').click().type('sppm7qncqmVft5uECkwjLcLdEJGzM3Cw'),//incorrect
        cy.get('.btn').click(),
        cy.get('.error').should ('contain', 'Bad username or password')
    })
  it('Correct username & password', () => {
    cy.get(':nth-child(1) > input').click().type('tester01'), //correct
    cy.get(':nth-child(2) > input').click().type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c'),//correct
    cy.get('.btn').click(),
    cy.contains('Tester Hotel Overview'),
    cy.get('.user > .btn').click()

})
    it('Correct User Welcome', () => {
        cy.get(':nth-child(1) > input').click().type('tester01'), //correct
        cy.get(':nth-child(2) > input').click().type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c'),//correct
        cy.get('.btn').click(),
        cy.contains('Welcome tester01!'),
        cy.get('.user > .btn').click()

  })






    })

    
    
    
