/// <reference types="cypress" />

import * as loginFunction from '../integration/pages/indexPage'
import {  password1, user1 } from '../integration/targets/target'
import clientPage, * as clientFunction from '../integration/pages/clientPage'
import * as targets from '../integration/targets/target'

describe('Create Client Test', function(){
    beforeEach ( ()=>{
        cy.visit(targets.base_url)
        loginFunction.checkTitleIndexPage(cy, 'Testers Hotel')
        loginFunction.logIn(cy, user1, password1, 'Tester Hotel Overview')
        cy.contains('Clients')
    })

    it('Open clients', function(){

      clientPage.createClient(cy, 'Jesper','test@hotmail.com', '07707654808')
      loginFunction.logOut(cy)
    })
    })


