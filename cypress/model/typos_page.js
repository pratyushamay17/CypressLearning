///<reference types = "cypress"/>
const url = require ('../fixtures/urls.json')
const texts = require ('../fixtures/typosTexts.json')
class Typos
{
     
    visit()
    {
        cy.visit(url.env.typos)
    }

    validateTyposText()
    {
        cy.get('.example p').eq(0).then(($ele1) => {
        const line1text = $ele1.text().replace("\n","").trim()
        expect(line1text).to.eq(texts.textAtLine1)
        })

        cy.get('.example p').eq(1).then(($ele2) => {
        const line2text = $ele2.text().replace("\n","").trim()
        expect(line2text).to.eq(texts.textAtLine2)
        })
    }

}

export default new Typos();