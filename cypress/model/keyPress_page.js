const url = require ('../fixtures/urls.json')

class KeyPressPage {
 
    visit() 
    {
        cy.visit(url.env.keyPress)
    }

    assertKeyedValue()
    {
        cy.get('#target').type('{shift}j')
        cy.get('#result').should('have.text','You entered: J')
    }
}
export default new KeyPressPage();