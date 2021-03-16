const url = require ('../fixtures/urls.json')
class BrokenImagesPage {
 
    visit() 
    {
        cy.visit(url.env.brokenImages)
    }

    brokenImage()
    {
     cy.get('div[class="example"]').find('img')
    .then(($elem) => expect($elem[0].naturalWidth).to.be.eq(0))
    }
}
export default new BrokenImagesPage();