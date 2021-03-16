///<reference types = "cypress"/>
import HorizontalSliderPage from '../model/horizontal_slider_page'

describe('Horizontal Slider', ()=>{ 

    it('should slide to position 3',() => {
        HorizontalSliderPage.visit()
        HorizontalSliderPage.dragSlider()
    })
 })