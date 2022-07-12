import BrokenImagesPage from "../pages/broken.images.page";

describe('Broken images', function() {
   beforeEach(() => {
    BrokenImagesPage.open('/')
  })

  it('Width of images are greater than 0', function () {
    cy.get('img').each(img => {
      cy.wrap(img).scrollIntoView()
        .should('be.visible')
        .and('have.prop', 'naturalWidth')
        .then(cy.log)
        .should('be.greaterThan', 0)
      })

  })

  it('Status code of images is 200', function() {
    cy.get('img').each(img => {
      cy.request(img.prop('src'))
        .its('status')
        .should('eq', 200)
      })
  })
})



