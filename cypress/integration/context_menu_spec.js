///<reference types = "cypress"/>
import ContextMenuPage from '../model/context_menu_page'

describe('Context menu', ()=>{ 

    it('assert Alert on context menu', () => {
        ContextMenuPage.visit()
        ContextMenuPage.assertAlert()
    })     
})