///<reference types = "cypress"/>
import AddOrRemoveElementsPage from '../model/add_or_remove_elements_page'

describe('Add/Remove Elements page', ()=>{

    beforeEach(() =>
    {
        AddOrRemoveElementsPage.visit()    
    })

it('should verify Add Elements',() => 
    {   
        AddOrRemoveElementsPage.clickAddElementButton()
        AddOrRemoveElementsPage.deleteButton.should('be.visible');
    })

it('should verify Delete Elements',() => 
    {
        AddOrRemoveElementsPage.clickAddElementButton()
        AddOrRemoveElementsPage.clickDeleteElementButton()
        AddOrRemoveElementsPage.deleteButton.should('not.exist');
    })
})