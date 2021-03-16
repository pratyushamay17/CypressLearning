///<reference types = "cypress"/>
import DropdownPage from '../model/dropdown_page'

describe('Drop down', ()=>{ 

    before(() => {        
        DropdownPage.visit()
    })

    it('assert dropdown value',() => {
        DropdownPage.assertDropdown()
    })    
    
})