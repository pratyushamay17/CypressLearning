///<reference types = "cypress"/>
const numberOfScrolls = 4
import InfiniteScroll from '../model/infiniteScroll_page'

describe(('Infinite Scroll'),()=>{

    before(() => {
        InfiniteScroll.visit()
    })

    Cypress._.times(numberOfScrolls, () => { 
    it('should scroll down',() => {
        InfiniteScroll.ensureInfiniteScroll()
    })
})

})