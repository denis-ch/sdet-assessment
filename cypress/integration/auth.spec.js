import LoginPage from "../pages/login.page"
import BasicAuth from "../pages/basic.auth"

describe('Auth', function() {

  describe('Basic Auth', function() {

    it('basic authentication', function() {
      cy.visit('/basic_auth', {
       auth: { username: 'admin', password: 'admin'}
      })
      BasicAuth.header
        .should('have.text', 'Basic Auth')
        .and('be.visible')
      BasicAuth.paragraph
        .should('contain', 'Congratulations! You must have the proper credentials.')
        .and('be.visible')
      cy.url()
        .should('include', '/basic_auth')
    })
  })

  describe('Login', function() {
    beforeEach(()=> {
      LoginPage.open('/')
    })

    it('Log in with valid credentials', function() {
      LoginPage.login('tomsmith', 'SuperSecretPassword!')
      LoginPage.successMessage
        .should('contain', 'You logged into a secure area!')
        .and('be.visible')
        .should('have.css', 'background-color', 'rgb(93, 164, 35)')
      cy.url()
        .should('include', '/secure')
    })

    it('Error for invalid username', function() {
      LoginPage.login('invalidUsername', 'SuperSecretPassword!')
      LoginPage.errorMessage
        .should('contain', 'Your username is invalid!')
        .and('be.visible')
        .should('have.css', 'background-color', 'rgb(198, 15, 19)')
    })

    it('Error for invalid password ', function() {
      LoginPage.login('tomsmith', 'InvalidPassword')
      LoginPage.errorMessage
        .should('contain', 'Your password is invalid!')
        .and('be.visible')
        .should('have.css', 'background-color', 'rgb(198, 15, 19)')
    })
  })
})