/// <reference types="cypress" />
const goBackButton = ':nth-child(3) > .btn'

//check each room-button in Overveiw 1 by one with page validation
function checkOverviewButtons (cy, pageValidate, room1, room2, room3, room4){

//Rooms to check
      var roomsPath = [
        room1, room2, room3, room4
      ];
//Validation of page
      var roomsName = [
        'Rooms', 'Clients', 'Bills', 'Reservations'
      ];

      var y = 0;
      var i;

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

