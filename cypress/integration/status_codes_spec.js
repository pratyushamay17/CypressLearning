///<reference types = "cypress"/>
import StatusCodesPage from '../model/status_codes_page'

describe('Status codes', ()=>{ 

    beforeEach(() =>{
        StatusCodesPage.visit()   
    })

    it('Assert status code 404 message',() => { 
        StatusCodesPage.navigateAndAssert()
    })    
})