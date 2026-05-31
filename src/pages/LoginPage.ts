import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // 🔹 Scoped root (VERY IMPORTANT)


  // 🔹 Logo (fixed multiple issue)
  get logo() {
    return this.page.locator('.orangehrm-login-logo img');
  }

  // 🔹 Heading (scoped + strict)
  get loginHeading() {
    return this.page.getByRole('heading', {
      name: 'Login',
      exact: true
    });
  }

  // 🔹 Default username text (critical fix
  get defaultUsernameText() {
    return this.page.getByText('Username : Admin', {
      exact: true
    });
  }

  // 🔹 Default password text (critical fix)
  get defaultPasswordText() {
    return this.page.getByText('Password : admin123', {
      exact: true
    });
  }

  // 🔹 Username (already good)
  get usernameInput() {
    return this.page.getByPlaceholder('Username');
  }

  // 🔹 Password
  get passwordInput() {
    return this.page.getByPlaceholder('Password');
  }

  // 🔹 Login button (strict)
  get loginBtn() {
    return this.page.getByRole('button', {
      name: 'Login',
      exact: true
    });
  }

  // 🔹 Forgot password link (better than text)
  get forgotPassword() {
    return this.page.getByRole('link', {
      name: 'Forgot your password?',
      exact: true
    });
  }

  // 🔹 Error message (critical fix)
  get errorMsg() {
    return this.page.locator('.oxd-alert-content-text');
  }

 
}