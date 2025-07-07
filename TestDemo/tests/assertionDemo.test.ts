import {test, expect} from '@playwright/test';

test('Hard assertion demo', async({page})=>{

await page.goto('https://www.youtube.com/');

// visible, editablr, enabled, empty
await expect(page.getByPlaceholder('Search')).toBeVisible();
await expect(page.getByPlaceholder('Search')).toBeEditable();
await expect(page.getByPlaceholder('Search')).toBeEnabled();
await expect(page.getByPlaceholder('Search')).toBeEmpty();


//URL, title, text, count, diabled

await page.getByPlaceholder('Search').click();
await page.getByPlaceholder('Search').fill("playwright");
await page.getByPlaceholder('Search').press('Enter');

await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright');
await expect(page).toHaveTitle('any title');

});