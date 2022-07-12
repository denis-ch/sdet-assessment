import Page from "./page";

class DownloadPage extends Page{
  get pageReload() {
    return cy.window().document().then(function (doc) {
      doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 500)
      })
    })
  }
  get textFile() { return cy.get('a[href="download/test.txt"]') }
  get jpgImage() { return cy.get('a[href="download/1.jpg"]') }
  get pdfFile() { return cy.get('a[href="download/sample.pdf"]') }
  get mp3File() { return cy.get('a[href="download/Rollin.mp3"]') }
  get zipArchive() { return cy.get('a[href="download/sample-zip-file.zip"]') }


  open(){
    return super.open('/download')
  }
}

export default new DownloadPage()