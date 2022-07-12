import Page from "./page";

class BasicAuth extends Page {
  get header() { return cy.get('h3') }
  get paragraph() { return cy.get('p') }
}

export default new BasicAuth()