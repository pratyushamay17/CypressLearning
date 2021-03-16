///<reference types = "cypress"/>
import DynamicControls from '../model/dynamic_controls_page'

describe('Dynamic controls', ()=>{ 

    beforeEach(() =>{
        DynamicControls.visit()
    })

    it('Remove checkbox',() => {   
        DynamicControls.removeCheckbox()
    })
    
    it('Enable textbox',() => {
        DynamicControls.enableTextbox()
    })
})