import ChallengingDomPage from "../pages/challenging.dom.page";

describe('Challenging DOM', function() {
  beforeEach(() => {
    ChallengingDomPage.open('/')
  })

  it('Color buttons ', function() {
    ChallengingDomPage.button
      .should('have.css', 'background-color', 'rgb(43, 166, 203)')
    ChallengingDomPage.buttonAlert
      .should('have.css', 'background-color', 'rgb(198, 15, 19)')
    ChallengingDomPage.buttonSuccess
      .should('have.css', 'background-color', 'rgb(93, 164, 35)')
  })

  it('Table selectors ', function () {
    ChallengingDomPage.firstTheadElement
      .contains('Lorem')
    ChallengingDomPage.middleElement
      .contains( 'Definiebas5')
    ChallengingDomPage.secondTdElementLastTr
      .contains('Apeirian9')
    ChallengingDomPage.fourthEditButton
      .contains('edit')
  })
  it('Canvas ', function () {
    ChallengingDomPage.canvas
  })
})
