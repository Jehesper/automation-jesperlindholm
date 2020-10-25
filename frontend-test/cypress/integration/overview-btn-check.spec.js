/// <reference types="cypress" />

describe('btn-check', () => {


        it('Find Rooms', () => {
            cy.visit('/'),
            cy.get(':nth-child(1) > input').click().type('tester01'), //correct
            cy.get(':nth-child(2) > input').click().type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c'),//correct
            cy.get('.btn').click(),
            cy.contains('Rooms'),
            cy.contains('Clients'),
            cy.contains('Bills'),
            cy.contains('Reservations')
            
        })
    
        it('Rooms-btn', function(){
            cy.get(':nth-child(1) > .btn').click(),
            cy.contains('Rooms'),
            cy.get(':nth-child(3) > .btn').click()

            cy.get('.blocks > :nth-child(2) > .btn').click(),
            cy.contains('Clients'),
            cy.get(':nth-child(3) > .btn').click()

            cy.get(':nth-child(3) > .btn').click(),
            cy.contains('Bills'),
            cy.get(':nth-child(3) > .btn').click()

            cy.get(':nth-child(4) > .btn').click(),
            cy.contains('Reservations'),
            cy.get(':nth-child(3) > .btn').click()
        })
    })
