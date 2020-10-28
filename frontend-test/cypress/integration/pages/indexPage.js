/// <reference types="cypress" />

const indexPageTitle = 'Testers Hotel'
const usernameField = ':nth-child(1) > input'
const passwordFeild = ':nth-child(2) > input'
const logInButton = '.btn'
//const logOutButton = '.user > .btn'

//Login in with correct credentials
function logIn(cy, username, password, pageValidate){
    checkTitleIndexPage(cy, indexPageTitle),
    cy.get(usernameField).type(username),
    cy.get(passwordFeild).type(password),
    cy.get(logInButton).click(),
    cy.contains(pageValidate)
   
  
    
}


//validate index page is correct
function checkTitleIndexPage(cy){
    cy.title().should('eq', indexPageTitle)}

module.exports = {
    checkTitleIndexPage,
    logIn
}