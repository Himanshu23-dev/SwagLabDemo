
import {test,expect} from '@playwright/test';

test('handling drop down',async({page})=>{

    await page.goto("https://letcode.in/dropdowns");
    //await page.waitForTimeout(1000)

    //select dropdown using value
    //await page.locator("//select[@id='fruits']").selectOption('2');

    
    //select dropdown using text
    //await page.locator("//select[@id='fruits']").selectOption('Apple');

    const options = await page.locator('#fruits>option').allInnerTexts();
    console.log('All fruits ' ,options);          //All fruits  [ 'Select Fruit', 'Apple', 'Mango', 'Orange', 'Banana', 'Pine Apple' ]+

})