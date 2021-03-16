///<reference types = "cypress"/>
import BrokenImagePage from '../model/broken_images_page'

describe('Broken Images page', ()=>{

it('should verify Broken Images',() => {
    BrokenImagePage.visit()
    BrokenImagePage.brokenImage()
})
})