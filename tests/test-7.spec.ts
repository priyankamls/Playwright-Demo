import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-dev-doorknock-old.vercel.app/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('Ritish');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Email address').fill('priya.manthry@gmail.com');
  await page.getByLabel('Email address').press('Tab');
  await page.getByRole('button', { name: 'IN +' }).press('Tab');
  await page.getByLabel('Phone number').fill('77559-94389');
  await page.getByLabel('Phone number').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('priyanka_manthry');
  await page.getByLabel('Password', { exact: true }).press('Tab');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').click({
    clickCount: 3
  });
  await page.getByLabel('Email address').fill('xyz@gmail.com');
  await page.getByLabel('Phone number').click();
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByLabel('Phone number').dblclick();
  await page.getByLabel('Phone number').fill('99496-95855');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
});