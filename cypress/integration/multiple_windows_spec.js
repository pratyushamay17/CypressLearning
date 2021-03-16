///<reference types = "cypress"/>

import MultipleWindowsPage from '../model/multiple_windows_page'

describe(('Multiple Windows'),()=>{

    before(() => {
        MultipleWindowsPage.visit()
    })
it('should verify new window',() => {
    MultipleWindowsPage.verifyNewWindow()
})
})