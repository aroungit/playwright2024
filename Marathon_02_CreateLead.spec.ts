/*
1. Step: Launch the browser (Chrome / Edge / Firefox / Safari).
Expected Result: User should see the respective browser getting launched.
2. Step: Load the specified URL (https://login.salesforce.com/).
Expected Result: The Salesforce application’s login window should appear.
3. Step: Enter the Username, Password and click on the Login button.
Expected Result: The user should be logged into Salesforce CRM
4. Step: Click on the App Launcher toggle button.
Expected Result: A list of apps should appear.
5. Step: Click on the View All link.
Expected Result: The link should direct the user to the App Launcher pop up window.
6. Step: Type ‘Marketing’ in the search box and click on the Marketing link.
Expected Result: The link should direct the user to Marketing dashboard page.
7. Step: Navigate to the Leads tab from the Marketing dashboard.
Expected Result: User should see a list of existing leads (if any) and options to create a new
lead.
8. Step: Click on the New button to create a lead.
Expected Result: A form to input details for the new lead should appear.
9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid
data.
Expected Result: All details should be filled in without any errors.
10. Step: Click on the Save button.
Expected Result: A new lead should be created and user should be redirected to the detailed
view of the newly created lead. A confirmation message should also be displayed and verified.
11. Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and
click on the Convert link.
Expected Result: The Convert link should be visible and clickable and a new dialog should
appear asking for details about converting the lead to an opportunity, contact, and an account.
2
12. Step: Click on the Opportunity Name input field, clear and enter a new opportunity name.
Expected Result: The entered value should appear.
13. Step: Click on the Convert button.
Expected Result: The lead should be successfully converted. A confirmation message ‘Your
lead has been converted’ should be displayed and verified.
14. Step: Click on the Go to Leads button.
Expected Result: It should redirect the user to Leads page.
15. Step: Search the verified lead name in the Search box and verify the text ‘No items to display’.
Expected Result: The lead should not be displayed as it has been converted to Opportunity and
should display the confirmation message.
16. Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted
lead.
Expected Result: The newly converted opportunity should appear in the list with all the relevant
details correctly populated from the lead.
17. Step: Search the opportunity name created and click on the created opportunity name.
Expected Result: The created Opportunity Name should appear and verify the same
*/
import { test, chromium, expect } from "@playwright/test";

test("Create Lead and view opportunity", async ({page}) => {

//2. Step: Load the specified URL (https://login.salesforce.com/).
await page.goto("https://login.salesforce.com");

//3. Step: Enter the Username, Password and click on the Login button.
await page.fill("#username", "reacharoun@testleaf.com");

await page.fill("#password","Welcome@2024");

await page.click("#Login");

//4. Step: Click on the App Launcher toggle button.

await page.click(".slds-icon-waffle");

//5. Step: Click on the View All link.

await page.getByRole("button", {name : "View All"}).click();

//6. Step: Type ‘Marketing’ in the search box and click on the Marketing link.

await page.getByPlaceholder("Search apps or items...").fill("Marketing")

await page.click("//p[@class='slds-truncate']");

//7. Step: Navigate to the Leads tab from the Marketing dashboard.

await page.click("//a[@title='Leads']");

//8. Step: Click on the New button to create a lead.

await page.click("//button[@name='New']");

//9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data.

await page.click("//button[@data-value='--None--']");
await page.click("//span[@title='Mr.']");
await page.fill("//input[@name='firstName']","Testing1");
await page.fill("//input[@name='lastName']","Welcome1");
await page.fill("//input[@name='Company']","Testleaf1");

//10. Step: Click on the Save button.

await page.click("//button[@name='SaveEdit']"); 

const LeadStatus = await page.locator("//span[@data-aura-class='forceActionsText']").innerText();
console.log(`${LeadStatus}`);
expect(`${LeadStatus}`).toContain("was created");


//11. Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link.

await page.getByText('Show more actions').click();

await page.getByRole('menuitem',{name:'Convert'}).click();

//12. Step: Click on the Opportunity Name input field, clear and enter a new opportunity name.

const opportunityName = page.locator(".createPanel>div>div>button").nth(2);
//("//div[@data-aura-class='runtime_sales_leadConvertCreatePanelDesktop']").nth(5);
//page.locator(".createPanelCollapsed>button").nth(2);
//page.locator("//button[@class='slds-button transparentButton']").last();
await opportunityName.click();
//await opportunityName.clear();
await opportunityName.fill("NewOpportunity");

//13. Step: Click on the Convert button.

await page.click("//button[@class='slds-button slds-button_brand']");

//14. Step: Click on the Go to Leads button.
await page.click("//button[@class='slds-button slds-button_brand']")

//15. Step: Search the verified lead name in the Search box and verify the text ‘No items to display’.

//16. Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.

await page.click("//a[@title='Opportunities']");

//17. Step: Search the opportunity name created and click on the created opportunity name

const opportunitySearch = page.locator("//input[@name='Opportunity-search-input']");
await opportunitySearch.fill("NewOpportunity");
await opportunitySearch.click();


})