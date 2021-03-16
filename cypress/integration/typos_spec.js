///<reference types = "cypress"/>
import Typos from '../model/typos_page'

describe('typos',() =>{

    before(() => {
        Typos.visit()
    })

    it('verify for any typo errors',() => {
        Typos.validateTyposText()

    })
})