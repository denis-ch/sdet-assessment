
describe(' detect JS errors', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
  it('spy window.error', () => {
    cy.visit('/javascript_error',  {
      onBeforeLoad(win) {
        cy.spy(win.console, 'error').as('spyWinConsoleError')
      }
    })
    console.error('this is error')
    cy.get('@spyWinConsoleError').should('be.calledOnce')
  })
})