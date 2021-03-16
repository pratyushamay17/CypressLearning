/// <reference types="Cypress" />
const url = require ('../fixtures/urls.json')
class DragAndDropPage
{

    visit()
    {
        cy.visit(url.env.dragAndDrop)
    }

    dragBoxADropToBoxB()
    {
      const dataTransfer = new DataTransfer;

       cy.get('#column-a').trigger('dragstart',{dataTransfer})
       cy.get('#column-b').trigger("drop",{dataTransfer})
       cy.get('#column-a').trigger('dragend')        
    }

    dragAndDropThenvalidatePositionChange()
    {

        cy.get('#column-a').find('header').then(($ele1) => {
        let val1 = $ele1.text().toString()        
        this.dragBoxADropToBoxB()
        cy.get('#column-a').find('header').then(($ele2) => {
        let val2 = $ele2.text().toString()  
        expect(val2).not.to.eq(val1)
         })
      })
    }
}

export default new DragAndDropPage();