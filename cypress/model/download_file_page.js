const url = require ('../fixtures/urls.json')
const path = require('path');

class DownloadFilePage {
 
    visit() 
    {
        cy.visit(url.env.downloadFile)
    }

    downloadFile()
    {
        cy.get('a').contains(".txt").first().then(($firstText)=>{const txt = $firstText.text()       
        cy.request(url.env.downloadFile.concat('/',txt)).then((resp) => {
              // download success code is 200
              expect(resp.status).to.eq(200)
        })
    })
    }
}
export default new DownloadFilePage();