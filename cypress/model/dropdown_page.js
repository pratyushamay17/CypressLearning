const url = require ('../fixtures/urls.json')

class DropdownPage {
 
    visit() 
    {
        cy.visit(url.env.dropDown)
    }

    assertDropdown()
    {
        cy.get('#dropdown').select('Option 2')
        cy.get('#dropdown option[selected = "selected"]').should('have.text','Option 2')
    }
}
export default new DropdownPage();