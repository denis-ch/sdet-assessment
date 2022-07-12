import downloadPage from "../pages/download.page";

describe('Downloads', function() {

  it('Download 5 separate files using plugin', function() {
    cy.downloadFile('https://the-internet.herokuapp.com/download/test.txt', 'Downloads', 'test.txt')
    cy.readFile('cypress/Downloads/test.txt')
      .should('eq', 'Wikivoyage')
    cy.downloadFile('https://the-internet.herokuapp.com/download/1.jpg', 'Downloads', '1.jpg')
    cy.downloadFile('https://the-internet.herokuapp.com/download/sample.pdf', 'Downloads', 'sample.pdf')
    cy.downloadFile('https://the-internet.herokuapp.com/download/Rollin.mp3', 'Downloads', 'Rollin.mp3')
    cy.downloadFile('https://the-internet.herokuapp.com/download/sample-zip-file.zip', 'Downloads', 'sample-zip-file.zip')
  })

  describe('download using POM', function() {
    beforeEach(() => {
      downloadPage.open()
    })

    it('Download text file', function() {
      downloadPage.pageReload
      downloadPage.textFile.click()
      cy.readFile('cypress/downloads/test.txt')
        .should('eq', 'Wikivoyage')
    })

    it('Download jpg image ', function() {
      downloadPage.pageReload
      downloadPage.jpgImage.click()
    })

    it('Download pdf file ', function() {
      downloadPage.pageReload
      downloadPage.pdfFile.click()
    })

    it('Download mp3 file ', function() {
      downloadPage.pageReload
      downloadPage.mp3File.click()
    })

    it('Download zip archive ', function() {
      downloadPage.pageReload
      downloadPage.zipArchive.click()
    })
  })
})