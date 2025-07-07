import {test,expect} from '@playwright/test';

test('handling iframe drag and drop ',async({page})=>{

    await page.goto('https://jqueryui.com/droppable/');


    //drag drop is available in iframe
    const iframeElemnet = page.frameLocator('.demo-frame');
  
     //await iframeElemnet.locator("//a[text()='Simple']").click();


    //drag element
    const dragElement = iframeElemnet.locator('id="draggable"');
    //drop element
    const dropElement =iframeElemnet.locator('[id="droppable"]');

   await dragElement.dragTo(dropElement);

    await page.waitForTimeout(2000)
    //await expect(dropElement).toHaveText('Dropped!');

});

