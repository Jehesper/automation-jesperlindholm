/// <reference types="cypress" />
const goBackButton = ':nth-child(3) > .btn'

//check each room-button in Overveiw 1 by one with page validation
function checkOverviewButtons (cy, pageValidate){

  
  var Rooms = ':nth-child(1) > .btn'
  var Clients = '.blocks > :nth-child(2) > .btn'
  var Bills = ':nth-child(3) > .btn'
  var Reservations = ':nth-child(4) > .btn'
  

     

//Rooms to check
      var roomsPath = [
        Rooms, Clients, Bills, Reservations
      ];
//Validation of page
      var roomsName = [
        'Rooms', 'Clients', 'Bills', 'Reservations'
      ];

      var y = 0;
      var i;
//iterate through rooms
      for (i = 0; i < roomsPath.length; i++) {
        cy.get(roomsPath[i]).click(),
        cy.contains(roomsName[y]),
        cy.get(goBackButton).click(),
        cy.contains(pageValidate)
        y += 1;
      }

}
module.exports = {
    checkOverviewButtons
}

