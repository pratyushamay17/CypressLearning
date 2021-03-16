const url = require ('../fixtures/urls.json')
class AddOrRemoveElementsPage {

    get deleteButton() { return cy.get('#elements button'); }
    
    visit() 
    {
        cy.visit(url.env.addOrRemoveElements)
    }

    clickAddElementButton() {
        cy.get('#content div button').click();
    }

    clickDeleteElementButton() {
        cy.get('#elements button').click();
    }
}
export default new AddOrRemoveElementsPage();