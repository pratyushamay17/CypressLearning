const url = require ('../fixtures/urls.json')
class HorizontalSliderPage{

    visit() 
    {
        cy.visit(url.env.horizontalSlider)
    }

   dragSlider()
   {
       cy.get('input[type=range]').invoke('val',3).trigger('change').get('#range').should('have.text','3')
   }
}
export default new HorizontalSliderPage();