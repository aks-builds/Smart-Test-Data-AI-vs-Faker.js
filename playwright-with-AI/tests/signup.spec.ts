import { test, expect } from '@playwright/test';
import { generateBankUser } from '../generateBankUser';

test('Sign up user on Parabank with OpenAI-generated details', async ({ page }) => {
  const user = await generateBankUser();
  console.log('Generated user:', user);

  await page.goto('');
  await page.locator("input[id='customer.firstName']").fill(user.firstName);
  await page.locator("input[id='customer.lastName']").fill(user.lastName);
  await page.locator("input[id='customer.address.street']").fill(user.address);
  await page.locator("input[id='customer.address.city']").fill(user.city);
  await page.locator("input[id='customer.address.state']").fill(user.state);
  await page.locator("input[id='customer.address.zipCode']").fill(user.zipCode);
  await page.locator("input[id='customer.phoneNumber']").fill(user.phone);
  await page.locator("input[id='customer.ssn']").fill(user.ssn);
  await page.locator("input[id='customer.username']").fill(user.username);
  await page.locator("input[id='customer.password']").fill(user.password);
  await page.locator('#repeatedPassword').fill(user.password);

  // Submit the form
  await page.locator("input[value='Register']").click();

  // Assert registration success
  await expect(page).toHaveURL(/register.htm/);
  await expect(page.locator("div[id='rightPanel'] p")).toContainText(/Your account was created successfully. You are now logged in./i);

});