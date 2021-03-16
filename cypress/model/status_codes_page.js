const url = require ('../fixtures/urls.json')
class StatusCodesPage{
    get getAnswer() { return cy.get('#canvas'); }

    visit() 
    {
        cy.visit(url.env.statusCodes)
    }

    navigateAndAssert()
    {
        cy.get("#content div a").contains('404').click()        
        cy.get('p').should('contains.text','This page returned a 404 status code.')
    }    
}
export default new StatusCodesPage();