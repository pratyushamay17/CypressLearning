const url = require ('../fixtures/urls.json')

class ContextMenuPage {
 
    visit() 
    {
        cy.visit(url.env.contextMenu)
    }

    assertAlert()
    {
        cy.get('#hot-spot').rightclick()
        cy.on('window:alert',(txt)=>{           
            expect(txt).to.contains('You selected a context menu');
        })
    }
}
export default new ContextMenuPage();