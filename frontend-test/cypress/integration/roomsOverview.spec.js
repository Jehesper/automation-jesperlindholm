/// <reference types="cypress" />

import * as loginFunction from './pages/indexPage'
import * as overViewPage from './pages/hotelOverviewPage'
import * as targets from './targets/target'
import {  password1, user1 } from './targets/target'



describe('Overview Test', function(){
    beforeEach ( ()=>{
        cy.visit(targets.base_url)
       loginFunction.checkTitleIndexPage(cy, 'Testers Hotel')
       loginFunction.logIn(cy, user1, password1, 'Tester Hotel Overview')
    })


    it('Locate Overview Rooms', function(){
     
      overViewPage.checkOverviewButtons(cy, 'Tester Hotel Overview')
      loginFunction.logOut(cy)
      

       
       })
    

    })
