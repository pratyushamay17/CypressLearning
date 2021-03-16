/// <reference types="Cypress" />
import Inputs from '../model/inputs_page'
const num = 3

describe('Assert Input Box',() => {

    before(() =>{
        Inputs.visit()
    })

    Cypress._.times(num, () => { 
    it('clicks on uparrow', () => {
         
        Inputs.clickOnUpArrow()
    })
})

    it('validate text is 3', () => {

        Inputs.validateTextBoxHasText(num)
    
    })
})