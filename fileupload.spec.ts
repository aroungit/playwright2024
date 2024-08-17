//set Input files
import { expect, test } from "@playwright/test";
import path from "path";
import { hasUncaughtExceptionCaptureCallback } from "process";

test("Upload files", async ({page}) => {

    await page.goto("https://leafground.com/file.xhtml");

    await page.locator(".card").filter({has: page.getByText("Basic Upload")})
    .locator("//input[@type='file']").setInputFiles([path.join(__dirname,"Testinfo.txt")])

    await expect(page.locator(".ui-fileupload-filename")).toContainText('Testinfo');

    await page.waitForTimeout(3000);

    
})
//File Chooser

test.only("Upload Files using File Chooser", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    const filePromise = page.waitForEvent("filechooser");

    await page.click("#drag-drop-upload");

    const fileChooser = await filePromise;

    await fileChooser.setFiles([path.join(__dirname, "Testinfo.txt")]);

    await expect(page.locator(".dz-sucess-mark")).toContainText("mark");

    
})