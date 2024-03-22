const { test, expect } = import('@playwright/test') ;

test('Check element text content', async ({ page }) => {
  await page.goto('https://www.doorknock.co.nz/');
  const element = await page.$('a');
  const actualText = await element.innerText();
  const expectedText = 'Expected Text';
});

