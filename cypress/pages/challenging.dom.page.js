import Page from "./page";

class ChallengingDomPage extends Page{

  get button() { return cy.get('.button').not('.alert,.success') }
  get buttonAlert(){ return cy.get('.button').filter('.alert') }
  get buttonSuccess() { return cy.get('.button').filter('.success') }
  get firstTheadElement() {return cy.get('thead tr').eq(0) }
  get middleElement() { return cy.get('tbody tr').eq(5)}
  get secondTdElementLastTr() { return cy.get('tbody tr').last()}
  get fourthEditButton() { return cy.get('tbody tr').eq(3)}
  get canvas() { return cy.get('#canvas') }
  open() {
    return super.open('/challenging_dom')
  }
}

export default new ChallengingDomPage()