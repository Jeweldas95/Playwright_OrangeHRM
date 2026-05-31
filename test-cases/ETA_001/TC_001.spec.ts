import { test, expect, Locator } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test('Verify Title', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');

const title: string = await page.title();
console.log("Page Title is: " + title);

// Expect the title to be "Example Domain"
await expect(page).toHaveTitle('OrangeHRM');
});

test('Verify URL', async ({ page}) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');

let currentURL: string = await page.url();
console.log("Current URL is: " + currentURL);

// Expect the URL to be "https://opensource-demo.orangehrmlive.com/"
expect(currentURL).toContain('https://opensource-demo.orangehrmlive.com/');
});

test('Verify Logo', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');
// Expect the logo to be visible
const loginPage = new LoginPage(page);
await expect(loginPage.logo).toBeVisible();
});

test('Verify Login Heading is Visible', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');      

// Expect the login heading to be visible
const loginHeading:Locator = page.getByRole('heading', { name: 'Login' });
console.log("Login Heading is: " + await loginHeading.textContent());

await expect(loginHeading).toBeVisible();
});

test('Verify Default User NameText is Visible', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/'); 

// Expect the login text to be visible
const loginText:Locator = page.getByText('Username : Admin');
console.log("Login Text is: " + await loginText.textContent());

await expect(loginText).toBeVisible();
});

test('Verify Default Password Text is Visible', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');  

// Expect the password text to be visible
const passwordText:Locator = page.getByText('Password : admin123');
console.log("Password Text is: " + await passwordText.textContent());

await expect(passwordText).toBeVisible();
});

// test('Verify User Name Label is Visible', async ({ page }) => {
// await page.goto('https://opensource-demo.orangehrmlive.com/');      
// // Expect the username label to be visible
// const usernameLabel:Locator = page.locator('label.oxd-label', {
//   hasText: 'Username'
// });
// // console.log("Username Label is: " + await usernameLabel.textContent()); 
// await expect(usernameLabel).toBeVisible();
// });

// test('Verify Password Label is Visible', async ({ page }) => {
// await page.goto('https://opensource-demo.orangehrmlive.com/');  

// // wait for the DOM content to be loaded before proceeding
// await page.waitForLoadState('domcontentloaded');
// // Expect the password label to be visible
//   const passwordLabel:Locator = page.locator('label.oxd-label', {
//     hasText: 'Password'
//   });
// // console.log("Password Label is: " + await passwordLabel.textContent()); 
// await expect(passwordLabel).toBeVisible();
// });

test('Verify User Name Input Field is Visible', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');  
// Expect the username input field to be visible
const usernameInput:Locator = page.locator('input[placeholder="Username"]');
await expect(usernameInput).toBeVisible();
});

test('Verify Password Input Field is Visible', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');  
// Expect the password input field to be visible
const passwordInput:Locator = page.locator('input[placeholder="Password"]');
await expect(passwordInput).toBeVisible();
});

test('Verify Login Button is Visible', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');
// Expect the login button to be visible
const loginButton:Locator = page.getByRole('button', { name: 'Login' });
await expect(loginButton).toBeVisible();
});

test('Verify Forgot Password Link is Visible', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');      
// Expect the forgot password link to be visible
const forgotPasswordLink:Locator = page.getByText('Forgot your password?');
await expect(forgotPasswordLink).toBeVisible();
});