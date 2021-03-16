const url = require ('../fixtures/urls.json')
class BasicAuthPage{

    visit() 
    {
        cy.visit(url.env.auth)
    }

    invalidRequest()
    {        
        cy.request({url:Cypress.env("invalidAuthUrl"), encoding:'binary',failOnStatusCode: false}).then((response) => {expect(response.status).equal(401)})
    }

    verifyWelcomeMessage()
    {
        cy.get('#content div p').contains('Congratulations! You must have the proper credentials.')
    }
}
export default new BasicAuthPage();