/// <reference types="cypress" />



//inputvalues
var startDate = '2020-10-07'
var endDate = '2020-10-14'
var url = 'http://localhost:3000/reservations'



//feilds
var startFeild = ':nth-child(1) > input'
var endFeild = ':nth-child(2) > input'



function makeReservation(cy){

    cy.get(':nth-child(4) > .btn').click()
    cy.contains('Reservations')
    cy.get('h2 > .btn').click() 
    cy.contains('New Reservation')
    cy.get(startFeild).type(startDate)
    cy.get(endFeild).type(endDate)
    cy.get('.blue').click()
    cy.url().should('eq', url)
    
}


module.exports = {
    makeReservation}

