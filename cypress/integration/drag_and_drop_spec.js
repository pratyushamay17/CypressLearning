  /// <reference types="Cypress" />
  import DragAndDropPage from '../model/drag_and_drop_page'

  describe(('Drag and Drop'),() => { 

    before(() => {
      DragAndDropPage.visit()
    })

    it(('should drag from position A to position B'),() => {
  
      DragAndDropPage.dragAndDropThenvalidatePositionChange();
            
    })
  })