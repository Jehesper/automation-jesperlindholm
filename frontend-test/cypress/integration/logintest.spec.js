/// <reference types="cypress" />

import * as loginFunction from './pages/indexPage'
import * as targets from '../integration/targets/target'
import {  password1, user1 } from '../integration/targets/target'


describe('Index Page', function(){
beforeEach ( ()=>{
    cy.visit(targets.base_url)
   loginFunction.checkTitleIndexPage(cy, 'Testers Hotel')
})

it('Valid Login', function(){
    loginFunction.logIn(cy, user1, password1, 'Tester Hotel Overview')
})



})
