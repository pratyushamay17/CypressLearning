   /// <reference types="Cypress" />
   import HoverPage from '../model/hover_page'

   describe(('Hover'),() => { 

    beforeEach(()=>{
        HoverPage.visit();
    })
    it(('Hover on the middle image and verify text'),() => { 
        HoverPage.hoverOnImage();
    })
})