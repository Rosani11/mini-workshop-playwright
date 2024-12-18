import { test, expect } from "@playwright/test";

// Before each test, navigate to the homepage
test.beforeEach(async ({ page }) => {
    console.log("Navigating to homepage...");
    await page.goto("https://magento.softwaretestingboard.com/", { waitUntil: "domcontentloaded" });
    console.log("Page loaded successfully.");
    await expect(page.getByLabel('store logo')).toBeVisible();
});

// Test to validate the search functionality
test('User is able to use the search feature and see relevant results', async ({ page }) => {
    // Input search term into the search box (t-shirt)
    console.log("Locating search box...");
    const searchBox = page.locator("[id='search']"); 
    await searchBox.fill("t-shirt"); 
    console.log("Search term entered.");
    await searchBox.press("Enter");
});
    test('User is able to use the search feature and see relevant results2', async ({ page }) => {
        // Input search term into the search box (Jacket)
        console.log("Locating search box...");
        const searchBox = page.locator("[id='search']"); 
        await searchBox.fill("Jacket"); 
        console.log("Search term entered.");
        await searchBox.press("Enter");

    // Validate the search results page is displayed
    console.log("Validating search results page...");
    await expect(page.locator("h1 span")).toContainText("Search results for:", { timeout: 15000 });

    // Validate at least one result is displayed
    console.log("Validating search results...");
    const searchResults = page.locator(".product-item");
    const resultsCount = await searchResults.count();
    expect(resultsCount).toBeGreaterThan(0);

});
