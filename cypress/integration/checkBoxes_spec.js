   /// <reference types="Cypress" />
   import CheckBoxes from '../model/checkBoxes_page'

   describe(('check and uncheck checkboxes'),() => { 

    beforeEach(()=>{
        CheckBoxes.visit();
    })
describe(('checkBox validation'),() => { 

    it(('check the checkbox'),() => { 
        CheckBoxes.checkAnUncheckedBox();
    })

    it(('uncheck checkbox'),() => { 
        CheckBoxes.uncheckCheckBox();
    })
})

})