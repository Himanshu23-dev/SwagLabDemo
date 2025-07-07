
import {test,expect} from '@playwright/test'

test ('Website practice ',async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Username').type('standard_user');
   
    await page.getByPlaceholder('Password').type('secret_sauce');

    await page.locator('#login-button').click();

   const productTitle= page.getByText('Products');
   const error = page.locator('[data-test="error"]');

   if(await productTitle.isVisible()){

    console.log('Product page is visible')
    await page.screenshot({path:'./screenshots/SwagPractice/productPage.png',fullPage:true});

   }else if(await error.isVisible()){

    console.log('Login fail')
    await page.screenshot({path:'./screenshots/SwagPractice/productFailPage.png',fullPage:true});
   }else{

    console.log('all condition fail');
   }

   expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

   const shopItem = page.getByText('Sauce Labs Backpack').nth(1);
   
  await  page.getByText('Add to cart').nth(1).click();

   console.log("add the item");

   await page.waitForTimeout(2000);

   await page.locator('.shopping_cart_link').click();
   await page.waitForTimeout(2000);

   await expect(page.getByText('QTY')).toBeVisible();    //check this text is visible or not
  const cartItem= page.locator('data-test="item-quantity"')
  const cartQty = await cartItem.text                           //get value from locator
  console.log('Qty in cart >>', cartQty);

})