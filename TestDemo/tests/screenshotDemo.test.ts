import {test,expect} from '@playwright/test';

test('screenshot demo',async({page})=>{

await page.goto('https://demoqa.com/');

//element screenshot
//await page.locator("//img[@class='banner-image']").screenshot({path:'./screenshots/Elementscreenshot.png'});

//page screenshot
//await page.screenshot({path:'./screenshots/Pagescreenshot.png'});


//full page screenshot
await page.screenshot({path:'./screenshots/Fullpagescreenshot.png',fullPage:true});


})