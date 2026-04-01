const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/web/LoginPage');
test.describe('Login tests', () => {

    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await test.step('step 1: Navigate to login page', async () => {
            await loginPage.navigate('/login');
        });
        await test.step('step 2: Login with valid credentials', async () => {
            await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
        });
        await test.step('step 3: Verify successful login', async () => {
            // Assuming that after successful login, we are redirected to a dashboard page with a specific element
         //   const dashboardElement = page.getByRole('heading', { name: 'Dashboards', level: 1 });
            const dashboardElement = page.getByText('Dashboards', { exact: true });
            await expect(dashboardElement).toBeVisible();
        });
    });
});