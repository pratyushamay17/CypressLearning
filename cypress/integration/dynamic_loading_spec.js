/// <reference types="Cypress" />
import DynamicLoading from '../model/dynamic_loading_page'

describe(('Dynamic loading'),() =>{

    before(() => {
        DynamicLoading.visit()
    })

    it('should verify element is no more hidden',() =>{
        DynamicLoading.validateDynamicLoading2()
    })
})
