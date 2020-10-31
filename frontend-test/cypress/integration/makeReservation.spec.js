/// <reference types="cypress" />

import * as loginFunction from '../integration/pages/indexPage'
import {  password1, user1 } from '../integration/targets/target'
import * as targets from '../integration/targets/target'
import reservationPage from '../integration/pages/reservationPage'

describe('Bill Test', function(){
    beforeEach ( ()=>{
        cy.visit(targets.base_url)
        loginFunction.checkTitleIndexPage(cy, 'Testers Hotel')
        loginFunction.logIn(cy, user1, password1, 'Tester Hotel Overview')
        cy.contains('Reservations')
    })

        it('Make a Reservation', function(){

            reservationPage.makeReservation(cy)
            loginFunction.logOut(cy)
         
          })

        
      
      
    })