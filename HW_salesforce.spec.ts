import { chromium, test } from "@playwright/test";
import { channel } from "diagnostics_channel";

test("SalesforceApplication_Login", async () => {
//Launching the Browser
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });
    const context = await browserInstance.newContext();
    const page = await context.newPage();
//Launching the Salesforce application
    await page.goto("https://login.salesforce.com");

//Providing the Username and passwor details and clicking Login Button
    await page.locator("#username").fill("reacharoun@testleaf.com");

    await page.locator("#password").fill("Welcome@2024");

    await page.getByRole("button", { name: "Log In" }).click();


//Getting the Page Title and URL
    const Title = await page.title();

    console.log(`the title of the page is  ${Title}`);

    console.log(page.url());

})