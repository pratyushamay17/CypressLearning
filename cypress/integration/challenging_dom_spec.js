///<reference types = "cypress"/>
import ChallengingDomPage from '../model/challenging_dom_page'

describe('Challenging DOM', ()=>{ 

    beforeEach(() =>{
        ChallengingDomPage.visit()   
    })

    it('Assert text on click of button',() => {       
        ChallengingDomPage.clickButtonAndVerifyAnswer()
    })
    
    it('Assert first column value',() => {      
        ChallengingDomPage.assertFirstColumn()  
    }) 
})