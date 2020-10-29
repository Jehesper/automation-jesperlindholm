/// <reference types="cypress" />

import * as loginFunction from './pages/indexPage'
import * as overViewPage from '../integration/pages/hotelOverviewPage'
import * as targets from '../integration/targets/target'
import {  password1, user1 } from '../integration/targets/target'



describe('Overview Button Check', function(){
    beforeEach ( ()=>{
        cy.visit(targets.base_url)
       loginFunction.checkTitleIndexPage(cy, 'Testers Hotel')
       
    })

    it('Valid Login', function(){
      loginFunction.logIn(cy, user1, password1, 'Tester Hotel Overview')
  })
   
    it('Find Overview Rooms', function(){
     
      overViewPage.checkOverviewButtons(cy, 'Tester Hotel Overview', ':nth-child(1) > .btn',
       '.blocks > :nth-child(2) > .btn', ':nth-child(3) > .btn', ':nth-child(4) > .btn')
      

       
       })
    

    })
