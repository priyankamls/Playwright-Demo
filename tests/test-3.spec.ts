// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://pw-practice-app.web.app/');
//   //await page.goto('https://pw-practice-app.web.app/pages/iot-dashboard');
//   await page.getByRole('link', { name: 'Forms' }).click();
//   await page.getByRole('link', { name: 'Form Layouts' }).click();
//   //find by tag name - input
//   page.locator('input');
//   //await page.locator('#inputEmail1').click();
//   //await page.locator('#inputEmail1').fill('priya.manthry@gmail.com');
// });

// import { test, expect } from '@playwright/test';
 
// test('locator syntax rules', async ({ page }) => {
//   await page.goto('https://pw-practice-app.web.app/');
//   await page.getByRole('link', { name: 'Forms' }).click();
//   await page.getByRole('link', { name: 'Form Layouts' }).click();
 
//   // find by tag name - input
//   //await page.locator('input').nth(3).click();

//   //find by ID
//   await page.locator('#inputEmail1').click();

//   //find by Class name - style an element
//   await page.locator('.input-full-width').nth(2).click();

//   //find by attribute name
//   //await page.locator('[placeholder="Email"]').nth(1).click();
// });

import { test, expect } from '@playwright/test';
 
test('locator syntax rules', async ({ page }) => {
  await page.goto('https://pw-practice-app.web.app/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
 
  // find by tag name - input
  // await page.locator('input').nth(3).click();
 
  // find by ID
  // await page.locator('#inputEmail1').click();
 
  // find by class name
  // await page.locator('.input-full-width').nth(2).click();
 
  // find by attribute name
  // await page.locator('[placeholder="Email"]').nth(1).click();
  // await page
  //   .locator(
  //     '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]'
  //   )
  //   .nth(2)
  //   .click();

  // find by combination of locators
  //await page.locator('input.input-full-width[placeholder="Email"]').nth(1).click();


// find by text - not best way though
// find by partial text
//await page.locator(':text("using")').selectText();

//find by exact text
await page.locator(':text-is("Using the Grid")').selectText();

});

test('user facing locators', async ({ page }) => {
	await page.goto('https://pw-practice-app.web.app/');

  //find by role
	await page.getByRole('link', { name: 'Forms' }).click();
	await page.getByRole('link', { name: 'Form Layouts' }).click();

  // await page.getByRole('textbox', {name: 'Email'}).nth(1).click();
  // await page.getByRole('button', {name: 'Sign In'}).nth(0).click();

  // find by label
  await page.getByLabel('Email').nth(0).click();

  //find by placeholder
  await page.getByPlaceholder('Email').nth(1).click();

  // find by text
  await page.getByText('Using the Grid').selectText();

  // find by title
  await page.getByTitle('IoT Dashboard').click();

  // find by test id
  
});

