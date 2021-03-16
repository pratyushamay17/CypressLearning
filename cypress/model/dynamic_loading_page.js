/// <reference types="Cypress" />
const url = require ('../fixtures/urls.json')

class DynamicLoadingPage
{
    visit()
    {
        cy.visit(url.env.dynamicLoading)
    }

    validateDynamicLoading1()
    {
        cy.get('#content div a').contains('Example 1: Element on page that is hidden').click()
        cy.get('#finish').should('have.css','display','none')
        cy.get('#start button').contains('Start').click()
        
        cy.get('#finish').then(($text)=>{const txt = $text.text()       
            cy.request(url.env.dynamicLoading.concat('/',1)).then((resp) => {
                  // page loading success code is 200
                  expect(resp.status).to.eq(200)
            })
        })
        
        cy.get('#finish',{timeout:10000}).should('not.have.css','display','none')

        cy.get('#finish').find('h4').contains('Hello World!').should('be.visible')
    }

    validateDynamicLoading2()
    {
        cy.get('#content div a').contains('Example 1: Element on page that is hidden').click()
        cy.get('#finish').should('be.hidden')
        .invoke('show').should('be.visible')
        .find('h4').contains('Hello World!').should('be.visible')

    }
}
export default new DynamicLoadingPage();