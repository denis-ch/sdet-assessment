import Page from "./page";

class LoginPage extends Page {
  get inputUsername() { return cy.get('#username') }
  get inputPassword() { return cy.get('#password') }
  get buttonLogin() { return cy.get('[type="submit"]') }
  get errorMessage() { return cy.get('[class="flash error"]') }
  get successMessage() { return cy.get('[class="flash success"]') }

  open() {
    return super.open('/login')
  }

  login(username, password){
    this.inputUsername.type(username)
    this.inputPassword.type(password)
    this.buttonLogin.click()
  }
}

export default new LoginPage()