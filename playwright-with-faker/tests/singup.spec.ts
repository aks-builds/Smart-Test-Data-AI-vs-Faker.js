import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Sign up user on Parabank and log details', async ({ page }) => {
  // Generate user data using Faker.js
  const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    phone: '9' + faker.string.numeric(9),
    ssn: faker.string.numeric(9),
    username: faker.internet.username(),
    password: faker.internet.password({ length: 10, memorable: true }),
  };

  // Log the generated data as JSON
  console.log(JSON.stringify(user, null, 2));

  // Go to registration page
  await page.goto('');

  // Fill the registration form
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