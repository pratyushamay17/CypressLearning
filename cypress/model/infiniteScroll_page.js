/// <reference types="Cypress" />
const url = require ('../fixtures/urls.json')
class InfiniteScroll
{
    visit()
    {
        cy.visit(url.env.infiniteScroll)
    }

    ensureInfiniteScroll()
    {
            cy.get('.jscroll-added').then((beforeScroll) => {
            cy.log(beforeScroll.length)
            cy.scrollTo('bottom',{duration:3000})
            cy.get('.jscroll-added').then((afterScroll) => {
                expect(afterScroll.length).to.be.greaterThan(beforeScroll.length)
            })       
})
    }

}

export default new InfiniteScroll();