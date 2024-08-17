import { expect, test } from "@playwright/test";

test('automate alert interactions', async ({ page }) => {

    //Load the URL
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

    page.setDefaultTimeout(5000);

    //const frame = page.frame({url:"https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm"});

    //await frame?.click("//button[@onclick='myFunction()']");

    //using Framelocator create an object and interact with the element to be clicked
    const frame = page.frameLocator("//div[@id='iframewrapper']/iframe").first();

    const objtobeClicked = frame.locator("//button[text()='Try it']");

    //Event handler using page.on to handle the alert
    page.on("dialog", async (toHandleDialog) => {

        await toHandleDialog.accept()

    })

    //event to be clicked
    await objtobeClicked.click();

    page.setDefaultTimeout(5000);

    //Assert to validate the outcome
    await expect(frame.locator("#demo")).toContainText("pressed");


})