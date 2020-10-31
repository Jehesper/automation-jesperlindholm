/// <reference types="cypress" />

var enterRoomsBtn = ':nth-child(1) > .btn'
var createRoomBtn = 'h2 > .btn'
var categoryFeild =':nth-child(1) > select'
var numberFeild = ':nth-child(2) > input'
var floorFeild = ':nth-child(3) > input'
var maxPriceFeild = ':nth-child(5) > input'
var roomTypeFeild = ':nth-child(6) > select'
var createBtn = '.blue'
var url = 'http://localhost:3000/room/new'

//creates a new room with values listed above
function createRoom(){

cy.get(enterRoomsBtn).click()
cy.get(createRoomBtn).click()
cy.contains('New Room')
cy.url().should('eq', url)

cy.get(categoryFeild).select('Single')
cy.get(numberFeild).type('1')
cy.get(floorFeild).type('2')
cy.get('.checkbox').click()
cy.get(maxPriceFeild).type('2000')

cy.get(roomTypeFeild).select('Sea View')
cy.get(createBtn).click()
}
module.exports = {createRoom}