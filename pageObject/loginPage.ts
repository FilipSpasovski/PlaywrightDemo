import { Page,Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly loginLink : Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly burgerMenu: Locator;
  
  

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('button:has-text("Sign In")');
    this.loginLink = page.locator('a[href="/login"]');
    this.usernameInput = page.locator('input[name="email"]'); 
    this.passwordInput = page.locator('input[name="password"]'); 
    this.loginButton = page.locator('button[type="submit"]'); 
    this.burgerMenu = page.locator('div.Header_innerBurger__1xZ84');
    
   
  }

  
  async navigate() {
    await this.page.goto('https://university.engenious.io');
  }

  
  async login(username: string, password: string) {
    await this.signInButton.click();
    await this.loginLink.click();
    await this.usernameInput.type(username, { delay: 100 } );
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.burgerMenu.click();
   
  }
}