import {test, expect} from "@playwright/test";

test.beforeEach(async ({ page }) => { //test yang sama di semua 
    await page.goto("https://magento.softwaretestingboard.com/");
    await expect(page.getByLabel('store logo')).toBeVisible();  
})


test('User are able to navigate to the mens tops product', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Home Page');
});

test('User are able to navigate to the mens sections', async ({ page }) => {
    await page.locator("//span[contains(text(), 'Men')]").click();
    await expect(page.locator("//h1/span")).toHaveText("Men");
});

