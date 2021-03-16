/// <reference types="Cypress" />
const url = require ('../fixtures/urls.json')

class DynamicContentPage
{
    visit()
    {
        cy.visit(url.env.dynamicContent)
    }

    validateImageCount()
    {
        cy.get('.large-2.columns').find('img').then((images) => {
            assert.equal(images.length,3,"image length is " +images.length)
            for(let i=0; i< images.length; i++)
            {
                expect(images[i].naturalWidth).to.be.greaterThan(0)
            }
            
        })

        //cy.get('.large-2.columns').find('img').its('length').should('be.eq',3)
    }

    validateParagraphCount()
    {
        cy.get('#content div .row div .large-10').then((paragraphs) => {
            assert.equal(paragraphs.length,3,"Number of paragraphs is " +paragraphs.length)
            for(let i=0;i<paragraphs.length; i++)
            {
                expect(paragraphs[i].innerText).not.be.empty
            }
        })
    }
}

export default new DynamicContentPage();