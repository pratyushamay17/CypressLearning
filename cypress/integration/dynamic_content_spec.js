/// <reference types="Cypress" />
import DynamicContent from '../model/dynamic_content_page'

describe(('Dynamic content'),()=>{

    before(() => {
        DynamicContent.visit()
    })

    it(('validate Dynamic content page has only 3 images'),()=>{
      
        DynamicContent.validateImageCount();
    })

    it(('validate Dynamic content page has 3 paragraphs'),()=>{

        DynamicContent.validateParagraphCount();
    })
})