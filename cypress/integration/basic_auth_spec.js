///<reference types = "cypress"/>
import BasicAuthPage from '../model/basic_auth_page'

describe('Basic Auth', ()=>{ 

    it('should verify invalid Basic Authentication',() => {
        cy.clearCookie("rack.session")
        BasicAuthPage.invalidRequest()
        cy.clearCookie("rack.session")
    })
    
    it('should verify valid Basic Authentication',() => {
        BasicAuthPage.visit()
        BasicAuthPage.verifyWelcomeMessage()
        cy.clearCookie("rack.session")
    })
})