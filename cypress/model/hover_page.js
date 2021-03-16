    /// <reference types="Cypress" />
    const url = require ('../fixtures/urls.json')
    class HoverPage
{
    visit()
    {
    cy.visit(url.env.hover)
    }

    hoverOnImage()
    {
        cy.get('#content img').eq(1).realHover()
        cy.get('h5').eq(1).should('have.text','name: user2').should('be.visible')
    }
}
export default new HoverPage();