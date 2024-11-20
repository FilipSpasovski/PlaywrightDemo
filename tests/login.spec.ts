import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObject/loginPage';

test.describe('Login Page E2E Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    // Initialize the LoginPage object
    loginPage = new LoginPage(page);
    // Navigate to the login page
    await loginPage.navigate();
  });

  test('should log in with valid credentials', async ({ page }) => {
    // Replace these with valid test credentials
    const validUsername = 'filip_spasovski2@hotmail.com';
    const validPassword = 'Tester123#';

    // Perform the login action
    await loginPage.login(validUsername, validPassword);
    const nameHeading = page.locator('h3.MuiTypography-root.MuiTypography-body1.User_card__title__005az.css-j5b5w');
    // Validate that the login was successful
    // You may want to check for a URL change, a success message, or the presence of an element indicating a successful login
    await expect(page).toHaveURL('https://university.engenious.io/'); // Adjust the URL or success criteria as needed
    await expect(nameHeading).toHaveText('Filip Spasovski')

  });

});