import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObject/loginPage';

test.describe('Login Page E2E Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should log in with valid credentials', async ({ page }) => {
    const validUsername = process.env.USER_EMAIL!;
    const validPassword = process.env.USER_PASSWORD!;
    await loginPage.login(validUsername, validPassword);
    const nameHeading = page.locator('h3.MuiTypography-root.MuiTypography-body1.User_card__title__005az.css-j5b5w');
    await expect(page).toHaveURL('https://university.engenious.io/'); 
    await expect(nameHeading).toHaveText('Filip Spasovski')
  });
});