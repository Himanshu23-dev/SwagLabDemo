import {test,expect} from '@playwright/test';

test('date pieckr demo',async({page})=>{

await page.goto('https://jqueryui.com/datepicker/');
const iFrame= page.frameLocator("[class='demo-frame']");

//Enter Hard code value
//await iFrame.locator("[id='datepicker']").fill('04/05/2025');

//Todays date
//await iFrame.locator("[id='datepicker']").click();
//await iFrame.locator(".ui-datepicker-today").click();

//Prvious date
await iFrame.locator("[id='datepicker']").click();
await iFrame.locator("[title='Prev']").click();
await iFrame .locator("text='22'").click();

//

})