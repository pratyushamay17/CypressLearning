const url = require ('../fixtures/urls.json')
class MultipleWindowsPage
{
    visit()
    {
        cy.visit(url.env.multipleWindows)
    }

   verifyNewWindow()
   {
    cy.get("#content div a").then(function ($a) {
        const href = $a.prop('href')
    cy.visit(href)
    cy.url().should('include', 'new')
    cy.get('h3').should('have.text','New Window')
   })
}
}
export default new MultipleWindowsPage();