import { test } from "@playwright/test";

test("Leafground Button", async ({page}) => {

    await page.goto('https://leafground.com/button.xhtml');

    await page.click("//div[@class='card']/button");

    const Title = await page.title();

    console.log(`${Title}`)

    await page.goBack();


    
})