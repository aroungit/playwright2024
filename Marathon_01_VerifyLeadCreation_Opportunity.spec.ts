import { chromium, test,expect } from "@playwright/test";

test("VerifyLeadCreation_Opportunity", async ({page}) => {

    //2. Step: Load the specified URL (https://login.salesforce.com/).

    await page.goto("https://login.salesforce.com/");

    //3. Step: Enter the Username, Password and click on the Login button.

    await page.fill("#username", "reacharoun@testleaf.com");

    await page.fill("#password","Welcome@2024");

    await page.click("#Login");

    //4. Step: Click on the App Launcher toggle button.


    await page.click(".slds-icon-waffle");

    //5. Step: Click on the View All link.

    await page.getByRole("button", {name : "View All"}).click();


    //6. Step: Type ‘Service’ in the search box and click on the Service link.

    await page.locator(".slds-input").last().fill("Service");

    await page.click('//p[@style ="display: inline"]');
    console.log(await page.title());

    //7. Step: Navigate to the Cases tab from the Service dashboard.

    await page.click("//a[@title='Cases']");

    //8. Step: Click on the New button to create a new case.

    await page.locator("//div[@title='New']").click();

    //9. Step: Click on the Search Contacts input field in Contact Name
    await page.getByPlaceholder("Search Contacts...").click();
    //10. Step: Click on the New Contact link
    await page.click("//span[@title='New Contact']");

    //11. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name) with a valid data.
    await page.locator("//button[@name = 'salutation']").click();

    await page.locator("//span[@title='Mr.']").click();
    await page.getByPlaceholder("First Name").fill('Aroun2');
    await page.getByPlaceholder("Last Name").fill("Ravi2");
    await page.waitForTimeout(2000);
    await page.waitForLoadState('domcontentloaded');

    //12. Step: Click on the Save button.

    await page.locator("//button[@name='SaveEdit']").last().click();
    const ToastMessage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText();
    console.log(`${ToastMessage}`);
    expect(`${ToastMessage}`).toContain("Aroun2");
    await page.waitForTimeout(2000);

    //13. Step: Click Search Accounts input field in Account Name and click on the New Account link

    await page.getByPlaceholder("Search Accounts...").click();
    await page.click("//span[@title='New Account']");

    //14. Step: Fill in all the mandatory fields (Account Name, Account Number) with a valid data.
    await page.fill("//input[@name='Name']","Aroun12");
    await page.fill("//input[@name='AccountNumber']","0123456");
    //15. Step: Select the Rating dropdown and choose the option ‘Hot’
    await page.click("//button[@aria-label='Rating']");
    await page.click(("//span[@title='Hot']"));
    await page.waitForTimeout(2000);
    await page.waitForLoadState('domcontentloaded');
    //16. Step: Click on the Save button.
    await page.locator("//button[@name='SaveEdit']").last().click();

    const ToastMessage1 = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText();
    console.log(`${ToastMessage1}`);
    expect(`${ToastMessage1}`).toContain("Aroun");
    //17. Step: Select the Status dropdown icon and choose the value as New.
    //await page.click("//button[@aria-label='Status']");
    await page.click("//button[@data-value='New']");
    //await page.click("//span[@title='New']");
    //18. Step: Select the Priority dropdown icon and choose the value as ‘High’.
    await page.click("//button[@data-value='Medium']");
    await page.click("//span[@title='High']");

    //19. Step: Select the Case Origin dropdown icon and choose the value as ‘Email’.
    await page.click("//button[@data-value='--None--']");
    await page.click("//span[@title='Email']");

    //20. Step: Fill in the Subject input field as ‘Product Return Request’ and Description input field as ‘Requesting a return for a defective product’
        //await page.getByLabel('Subject').fill("Product Return Request");
        //await page.fill("//input[@name='Subject']", "Product Return Request");
        await page.locator(".slds-input").last().fill("Product Return Request");


    await page.getByLabel("Description").fill("Requesting a return for a defective product");

    //21. Step: Click on the Save button.

    await page.click("//button[@name='SaveEdit']");

    const ToastMessage2 = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText();
    console.log(`${ToastMessage2}`);
    expect(`${ToastMessage2}`).toContain("was created");

    //22. Step: Edit the Status under Details category and choose the ‘Escalated’ option from the dropdown.

    await page.click("//button[@title='Edit Status']");


    await page.click("//button[@aria-label='Status']");

    await page.click("//span[@title='Escalated']");

    //23. Step: Click on the Save button.

    await page.click("//button[@name='SaveEdit']");
    
    //24. Step: Enter a valid data in the Share an Update input field and click on the Share button.
    //const updateLocator = await page.locator("//button[@title='Share an update...']")[2].click();
           // await updateLocator.click();
            //await updateLocator.click();
            await page.locator("//button[@title='Share an update...']")[2].click();
    await page.locator("//button[@title='Share an update...']").fill('Updated Test Status');
    page.waitForTimeout(2000);
        //await page.fill("//button[@title='Share an update...']","Updated Test Status");
        await page.locator("//button[@title='Share']").last().click();
    //await page.getByRole("button",{name :'Share an update...'}).click();

    //25. Step: Click on the dropdown icon and choose the Like on Chatter option.

    await page.click(".cuf-media-right");

    await page.waitForLoadState('load');

    await page.click("//li[@title='Like on Chatter']");
    await page.waitForLoadState('load');
    const ToastMessage3 = await page.locator("//div[@data-key='success']").innerText();
    console.log(ToastMessage3);
    expect(`${ToastMessage3}`).toContain('was liked');

    //26. Step: Navigate to the Chatter tab and verify the post liked by the user.

    await page.click("//a[@title='Chatter']");

    const LikeMessage = await page.locator("//span[@class='uiOutputText']").last().innerText();
    console.log(`${LikeMessage}`);
    expect(`${LikeMessage}`).toContain('now');














    //button[@data-value="New"]

   






    
})