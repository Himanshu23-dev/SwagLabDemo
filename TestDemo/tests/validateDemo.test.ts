
import {test, expect} from '@playwright/test';

// test("search playwright",async({page})=>{

// await page.goto("https://www.google.com/");
// await page.getByLabel('search',{exact:true}).fill("playwright");
// await page.getByLabel('search',{exact:true}).press('Enter');

// await page.locator("//h3[@class='LC20lb MBeuO DKV0Md']").click();
// await expect(page).toHaveTitle("Playwright");
// })



test ("Search the playwright",async({page})=>{

await page.goto("https://www.google.com/");
await page.waitForTimeout(1000);
//await page.locator("#APjFqb").type("playwright", { delay: 150 });
await page.locator("//textarea[@id='APjFqb']").fill("playwright");

await page.locator("//textarea[@id='APjFqb']").press('Enter');



await page.locator("//h3[@class='LC20lb MBeuO DKV0Md']").click();


})



