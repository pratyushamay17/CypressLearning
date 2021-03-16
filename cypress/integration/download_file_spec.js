///<reference types = "cypress"/>
import DownloadFile from '../model/download_file_page'

describe('Download file', ()=>{

    it('assert downloaded file',() => {
        DownloadFile.visit()
        DownloadFile.downloadFile()      
    })   
})