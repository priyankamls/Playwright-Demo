import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-dev-doorknock-old.vercel.app/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Sign in with Google Continue' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('7755994389');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Try again').click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('priya.manthry@gmail.com');
  await page.getByLabel('Email or phone').press('Enter');
  await page.getByRole('button', { name: 'Dismiss' }).click();
});