///<reference types = "cypress"/>
import KeyPressPage from '../model/keyPress_page'

describe('Key press', ()=>{ 

    before(() => {        
        KeyPressPage.visit()
    })

    it('assert keyed in value',() => {
        KeyPressPage.assertKeyedValue()
    })    
    
})