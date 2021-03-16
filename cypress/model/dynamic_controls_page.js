const url = require ('../fixtures/urls.json')

class DynamicControlsPage {
 
    visit() 
    {
        cy.visit(url.env.dynamicControls)
    }

    removeCheckbox()
    {
        cy.get('[type="checkbox"]').check()
        cy.get('#checkbox-example button').click()
        cy.get('[type="checkbox"]').should('not.exist')
        cy.get('#message').then(($elem) =>{let text = $elem[0].innerHTML
            expect(text).equal("It's gone!")   
        })     
    }

    enableTextbox()
    {
        cy.get('#input-example button').click()
        cy.get('#message').then(($elem) =>{let text = $elem[0].innerHTML
            expect(text).equal("It's enabled!") 
        })
    }
}
export default new DynamicControlsPage();