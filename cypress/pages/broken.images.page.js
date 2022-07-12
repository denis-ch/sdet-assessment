import Page from "./page";

class BrokenImagesPage extends Page {
  open(){
    return super.open('/broken_images')
  }
}

export default new BrokenImagesPage()