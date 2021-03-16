/// <reference types="Cypress" />
import {times} from 'lodash'
const url = require ('../fixtures/urls.json')
class Inputs
{
    visit()
    {
        cy.visit(url.env.inputs)
    }

    validateTextBoxHasText = function(num)
    {
        cy.get('.example input').should('have.value',num)              
    }

    clickOnUpArrow()
    {
        cy.get('.example input').focus()
        .type('{uparrow}')   
    }
    
}

export default new Inputs();