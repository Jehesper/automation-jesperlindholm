/// <reference types="cypress" />

import * as loginFunction from '../integration/pages/indexPage'
import {  password1, user1 } from '../integration/targets/target'
import * as createRoomFunction from '../integration/pages/roomsPage'
import * as targets from '../integration/targets/target'

describe('Room Test', function(){
    beforeEach ( ()=>{
        cy.visit(targets.base_url)
        loginFunction.checkTitleIndexPage(cy, 'Testers Hotel')
        loginFunction.logIn(cy, user1, password1, 'Tester Hotel Overview')
        cy.contains('Rooms')
    })


    it('Create a room', function(){
        
        createRoomFunction.createRoom()
        cy.contains('Rooms')
        loginFunction.logOut(cy)
    })



   
})