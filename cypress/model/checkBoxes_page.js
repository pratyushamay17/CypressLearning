    /// <reference types="Cypress" />
    const url = require ('../fixtures/urls.json')
    class CheckBoxes
{
    visit()
    {
    cy.visit(url.env.checkBoxes)
    }

    checkAnUncheckedBox()
    {
        cy.get('#checkboxes [type="checkbox"]').not('[disabled]').check().should('have.prop', 'checked')
    }

    uncheckCheckBox()
    {
        cy.get('#checkboxes [type="checkbox"]').not('[disabled]').uncheck().should('not.be','checked')
    }
}
export default new CheckBoxes();