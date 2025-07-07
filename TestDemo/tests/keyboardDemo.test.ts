import {test,expect} from '@playwright/test';

test('keyboard action',async({page})=>{

    await page.goto("https://www.google.com/");
    await page.locator("[aria-label='Search']").click();

    await page.locator("[aria-label='Search']").fill('playwright');

    await page.locator("[aria-label='Search']").first().press('Enter');

    await page.waitForTimeout(1000);

    await page.locator("[aria-label='Search']").first().press('Control+a');

    await page.waitForTimeout(1000);

    await page.locator("[aria-label='Search']").first().press('Delete');

})