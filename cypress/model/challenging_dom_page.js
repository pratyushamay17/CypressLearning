const url = require ('../fixtures/urls.json')
class ChallengingDomPage{
    get getAnswer() { return cy.get('#canvas'); }

    visit() 
    {
        cy.visit(url.env.challengingDom)
    }

    clickButtonAndVerifyAnswer()
    {
        cy.get('#content script').then(($elem) =>{let text = $elem[0].innerHTML
        let answer = text.split(";")[3].replace("canvas.strokeText('Answer: ","").split("'")[0].replace("\n","")  
        cy.get('[class = "button"]').click()
        cy.get('#content script').then(($elem) =>{let text = $elem[0].innerHTML
        expect(text.split(";")[3].replace("canvas.strokeText('Answer: ","").split("'")[0].replace("\n","")).not.equal(answer) 
        })
        })
    }

    assertFirstColumn()
    {
        cy.get('th').then(($elem) =>{const column = $elem[0].innerHTML
            expect(column).equal("Lorem")
        })
    }
}
export default new ChallengingDomPage();