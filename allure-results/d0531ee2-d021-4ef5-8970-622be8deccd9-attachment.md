# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\createcontact.spec.ts >> @smoke Create Contact 
- Location: tests\createcontact.spec.ts:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//a[text()=\'Deactivate Contact\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//a[text()=\'Deactivate Contact\']')
    - waiting for" https://leaftaps.com/crmsfa/control/createContact" navigation to finish...

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "opentaps CRM" [ref=e5] [cursor=pointer]:
    - /url: /opentaps/
    - img "opentaps CRM" [ref=e6]
  - generic [ref=e7]:
    - generic [ref=e8]:
      - text: DemoSalesManager |
      - link "Profile" [ref=e9] [cursor=pointer]:
        - /url: /crmsfa/control/myProfile
      - text: "|"
      - link "Shortcuts" [ref=e10] [cursor=pointer]:
        - /url: javascript:showKeyboardShortcutsHelp();
      - text: "|"
      - link "Logout" [ref=e11] [cursor=pointer]:
        - /url: /crmsfa/control/logout
    - generic [ref=e12]:
      - link "Live help for this page on opentaps Wiki" [ref=e14] [cursor=pointer]:
        - /url: http://www.opentaps.org/docs/index.php?title=View_Contact_Screen&oldid=0
        - img "Live help for this page on opentaps Wiki" [ref=e15]
      - link "Get help from an opentaps Partner" [ref=e16] [cursor=pointer]:
        - /url: http://www.opentaps.org/contact
        - img "Get help from an opentaps Partner" [ref=e17]
  - list:
    - listitem [ref=e19]:
      - link "My Home" [ref=e25] [cursor=pointer]:
        - /url: /crmsfa/control/myHomeMain
    - listitem [ref=e26]:
      - link "Leads" [ref=e32] [cursor=pointer]:
        - /url: /crmsfa/control/leadsMain
    - listitem [ref=e33]:
      - link "Contacts" [ref=e39] [cursor=pointer]:
        - /url: /crmsfa/control/contactsMain
    - listitem [ref=e40]:
      - link "Accounts" [ref=e46] [cursor=pointer]:
        - /url: /crmsfa/control/accountsMain
    - listitem [ref=e47]:
      - link "Cases" [ref=e53] [cursor=pointer]:
        - /url: /crmsfa/control/casesMain
    - listitem [ref=e54]:
      - link "Activities" [ref=e60] [cursor=pointer]:
        - /url: /crmsfa/control/activitiesMain
    - listitem [ref=e61]:
      - link "Opportunities" [ref=e67] [cursor=pointer]:
        - /url: /crmsfa/control/opportunitiesMain
    - listitem [ref=e68]:
      - link "Quotes" [ref=e74] [cursor=pointer]:
        - /url: /crmsfa/control/quotesMain
    - listitem [ref=e75]:
      - link "Orders" [ref=e81] [cursor=pointer]:
        - /url: /crmsfa/control/ordersMain
    - listitem [ref=e82]:
      - link "Forecasts" [ref=e88] [cursor=pointer]:
        - /url: /crmsfa/control/forecastsMain
    - listitem [ref=e89]:
      - link "Marketing" [ref=e95] [cursor=pointer]:
        - /url: /crmsfa/control/marketingMain
    - listitem [ref=e96]:
      - link "Partners" [ref=e102] [cursor=pointer]:
        - /url: /crmsfa/control/partnersMain
    - listitem [ref=e103]:
      - link "Teams" [ref=e109] [cursor=pointer]:
        - /url: /crmsfa/control/teamsMain
    - listitem [ref=e110]:
      - link "Reports" [ref=e116] [cursor=pointer]:
        - /url: /crmsfa/control/viewDashboard
    - listitem [ref=e117]:
      - link "opentaps" [ref=e123] [cursor=pointer]:
        - /url: /opentaps?externalLoginKey=EL88960686945
  - table [ref=e126]:
    - rowgroup [ref=e127]:
      - 'row "Last Viewed: Helix__1775999185986 Babu M (Qeagle) krish__1775999055081 jk__… Hari Arjun (TestLeaf) krish__1775999039398 jk__… Helix__1775999039435 srini_1775999039433 vasan…" [ref=e128]':
        - 'cell "Last Viewed: Helix__1775999185986 Babu M (Qeagle) krish__1775999055081 jk__… Hari Arjun (TestLeaf) krish__1775999039398 jk__… Helix__1775999039435 srini_1775999039433 vasan…" [ref=e129]':
          - list [ref=e130]:
            - listitem [ref=e131]:
              - generic [ref=e132]: "Last Viewed:"
            - listitem [ref=e133]:
              - link "Helix__1775999185986" [ref=e134] [cursor=pointer]:
                - /url: /crmsfa/control/viewAccount?partyId=10720
            - listitem [ref=e135]:
              - link "Babu M (Qeagle)" [ref=e136] [cursor=pointer]:
                - /url: /crmsfa/control/viewLead?partyId=10339
            - listitem [ref=e137]:
              - link "krish__1775999055081 jk__…" [ref=e138] [cursor=pointer]:
                - /url: /crmsfa/control/viewContact?partyId=10719
            - listitem [ref=e139]:
              - link "Hari Arjun (TestLeaf)" [ref=e140] [cursor=pointer]:
                - /url: /crmsfa/control/viewLead?partyId=10718
            - listitem [ref=e141]:
              - link "krish__1775999039398 jk__…" [ref=e142] [cursor=pointer]:
                - /url: /crmsfa/control/viewContact?partyId=10717
            - listitem [ref=e143]:
              - link "Helix__1775999039435" [ref=e144] [cursor=pointer]:
                - /url: /crmsfa/control/viewAccount?partyId=10715
            - listitem [ref=e145]:
              - link "srini_1775999039433 vasan…" [ref=e146] [cursor=pointer]:
                - /url: /crmsfa/control/viewLead?partyId=10716
  - generic [ref=e148]:
    - generic [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e155]: Shortcuts
        - list [ref=e157]:
          - listitem [ref=e158]:
            - link "My Contacts" [ref=e159] [cursor=pointer]:
              - /url: /crmsfa/control/myContacts
          - listitem [ref=e160]:
            - link "Create Contact" [ref=e161] [cursor=pointer]:
              - /url: /crmsfa/control/createContactForm
          - listitem [ref=e162]:
            - link "Find Contacts" [ref=e163] [cursor=pointer]:
              - /url: /crmsfa/control/findContacts
          - listitem [ref=e164]:
            - link "Merge Contacts" [ref=e165] [cursor=pointer]:
              - /url: /crmsfa/control/mergeContactsForm
      - generic [ref=e166]:
        - generic [ref=e171]: Contact Shortcuts
        - list [ref=e173]:
          - listitem [ref=e174]:
            - link "Create Order" [ref=e175] [cursor=pointer]:
              - /url: /crmsfa/control/newOrder?partyId=10721
          - listitem [ref=e176]:
            - link "Orders" [ref=e177] [cursor=pointer]:
              - /url: /crmsfa/control/findOrders?partyIdSearch=10721&performFind=Y
      - generic [ref=e178]:
        - generic [ref=e183]: Form Letters
        - table [ref=e186]:
          - rowgroup [ref=e187]:
            - row "Form Letter Template New User Welcome" [ref=e188]:
              - cell "Form Letter Template New User Welcome" [ref=e189]:
                - text: Form Letter Template
                - combobox [ref=e190]:
                  - option "New User Welcome" [selected]
            - row "Output Text" [ref=e191]:
              - cell "Output Text" [ref=e192]:
                - text: Output
                - combobox [ref=e193]:
                  - option "Text" [selected]
                  - option "MS Word"
                  - option "XML"
                  - option "HTML"
                  - option "PDF"
            - row "Generate Letter" [ref=e194]:
              - cell "Generate Letter" [ref=e195]:
                - button "Generate Letter" [ref=e196] [cursor=pointer]
    - generic [ref=e197]:
      - generic [ref=e203]: View Contact
      - generic [ref=e208]:
        - generic [ref=e209]:
          - generic [ref=e213]:
            - generic [ref=e214]: Contact
            - generic [ref=e215]:
              - link "Edit" [ref=e216] [cursor=pointer]:
                - /url: /crmsfa/control/updateContactForm?partyId=10721
              - link "Deactivate Contact" [ref=e217] [cursor=pointer]:
                - /url: javascript:opentaps.confirmAction('Are you sure?', null, 'DeactivateContactHiddenForm', null);
          - generic [ref=e218]:
            - generic [ref=e220]:
              - table [ref=e222]:
                - rowgroup [ref=e223]:
                  - row [ref=e224]:
                    - cell [ref=e225]
                    - cell [ref=e226]
              - table [ref=e228]:
                - rowgroup [ref=e229]:
                  - row "Name krish__1775999185986 jk__1775999185986 (10721)" [ref=e230]:
                    - cell "Name" [ref=e231]
                    - cell "krish__1775999185986 jk__1775999185986 (10721)" [ref=e232]
                  - row "First name krish__1775999185986 Last name jk__1775999185986" [ref=e233]:
                    - cell "First name" [ref=e234]
                    - cell "krish__1775999185986" [ref=e235]
                    - cell "Last name" [ref=e236]
                    - cell "jk__1775999185986" [ref=e237]
                  - row "First Name (Local) Last Name (Local)" [ref=e238]:
                    - cell "First Name (Local)" [ref=e239]
                    - cell [ref=e240]
                    - cell "Last Name (Local)" [ref=e241]
                    - cell [ref=e242]
                  - row "Salutation Birth Date" [ref=e243]:
                    - cell "Salutation" [ref=e244]
                    - cell [ref=e245]
                    - cell "Birth Date" [ref=e246]
                    - cell [ref=e247]
                  - row "Title Department" [ref=e248]:
                    - cell "Title" [ref=e249]
                    - cell [ref=e250]
                    - cell "Department" [ref=e251]
                    - cell [ref=e252]
                  - row "Preferred Currency USD - American Dollar" [ref=e253]:
                    - cell "Preferred Currency" [ref=e254]
                    - cell "USD - American Dollar" [ref=e255]
                  - row "Description Description__1775999185986" [ref=e256]:
                    - cell "Description" [ref=e257]
                    - cell "Description__1775999185986" [ref=e258]
                  - row "Important Note" [ref=e259]:
                    - cell "Important Note" [ref=e260]
                    - cell [ref=e261]
                  - row "Classifications" [ref=e262]:
                    - cell "Classifications" [ref=e263]
                    - cell [ref=e264]
                  - row "Marketing Campaigns" [ref=e265]:
                    - cell "Marketing Campaigns" [ref=e266]
                    - cell [ref=e267]
            - generic [ref=e269]:
              - table [ref=e271]:
                - rowgroup [ref=e272]:
                  - row [ref=e273]:
                    - cell [ref=e274]
                    - cell [ref=e275]
              - table [ref=e277]:
                - rowgroup [ref=e278]:
                  - row "Person Responsible For Demo Sales Manager" [ref=e279]:
                    - cell "Person Responsible For" [ref=e280]
                    - cell "Demo Sales Manager" [ref=e281]
            - generic [ref=e283]:
              - table [ref=e285]:
                - rowgroup [ref=e286]:
                  - row [ref=e287]:
                    - cell [ref=e288]
                    - cell [ref=e289]
              - table [ref=e291]:
                - rowgroup [ref=e292]:
                  - row "Reassign To Lookup" [ref=e293]:
                    - cell "Reassign To" [ref=e294]
                    - cell "Lookup" [ref=e295]:
                      - textbox [ref=e296]
                      - link "Lookup" [ref=e297] [cursor=pointer]:
                        - /url: javascript:call_fieldlookup2(document.reassignToForm.newPartyId,'LookupTeamMembers;jsessionid=49B2A278E63CEC9E5D28717FB1BB4B27.jvm1');
                        - img "Lookup" [ref=e298]
                  - row "Reassign" [ref=e299]:
                    - cell [ref=e300]
                    - cell "Reassign" [ref=e301]:
                      - button "Reassign" [ref=e302] [cursor=pointer]
        - generic [ref=e304]:
          - generic [ref=e309]: Custom Fields
          - table [ref=e311]:
            - rowgroup [ref=e312]:
              - row "Field Value" [ref=e313]:
                - cell
                - cell "Field" [ref=e314]:
                  - generic [ref=e315]: Field
                - cell "Value" [ref=e316]:
                  - generic [ref=e317]: Value
                - cell [ref=e318]
              - row "Add" [ref=e319]:
                - cell
                - cell [ref=e320]:
                  - textbox [ref=e321]
                - cell [ref=e322]:
                  - textbox [ref=e323]
                - cell "Add" [ref=e324]:
                  - link "Add" [ref=e325] [cursor=pointer]:
                    - /url: javascript:document.addCustomField.submit();
                    - img "Add" [ref=e326]
        - generic [ref=e328]:
          - generic [ref=e332]:
            - generic [ref=e333]: Contact Information
            - combobox [ref=e335]:
              - option "Create New" [selected]
              - option "..."
              - option "Address"
              - option "Phone Number"
              - option "Email"
              - option "Web URL"
              - option "Skype Contact"
          - generic [ref=e337]: No contact information on file
        - generic [ref=e338]:
          - generic [ref=e342]:
            - generic [ref=e343]: Pending Activities
            - generic [ref=e344]:
              - link "New Event" [ref=e345] [cursor=pointer]:
                - /url: createEventForm?partyId=10721&workEffortTypeId=EVENT
              - link "New Task" [ref=e346] [cursor=pointer]:
                - /url: createTaskForm?partyId=10721&workEffortTypeId=TASK
          - table [ref=e347]:
            - rowgroup [ref=e348]:
              - row "Type Purpose Activity Status Scheduled Date Due Date Remove" [ref=e349]:
                - cell "Type" [ref=e350]:
                  - link "Type" [ref=e352] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&pendingActivitiesOrderBy=workEffortTypeId#ListPendingActivities
                - cell "Purpose" [ref=e353]:
                  - link "Purpose" [ref=e355] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&pendingActivitiesOrderBy=workEffortPurposeTypeId#ListPendingActivities
                - cell "Activity" [ref=e356]:
                  - link "Activity" [ref=e358] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&pendingActivitiesOrderBy=workEffortName#ListPendingActivities
                - cell "Status" [ref=e359]:
                  - link "Status" [ref=e361] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&activitiesOrderBy=currentStatusId#ListPendingActivities
                - cell "Scheduled Date" [ref=e362]:
                  - link "Scheduled Date" [ref=e364] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&pendingActivitiesOrderBy=estimatedStartDate#ListPendingActivities
                - cell "Due Date" [ref=e365]:
                  - link "Due Date" [ref=e367] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&pendingActivitiesOrderBy=estimatedCompletionDate#ListPendingActivities
                - cell "Remove" [ref=e368]
        - generic [ref=e373]:
          - generic [ref=e374]: Accounts
          - link "Create New" [ref=e377] [cursor=pointer]:
            - /url: /crmsfa/control/createAccountForm?contactPartyId=10721
        - generic [ref=e382]:
          - generic [ref=e383]: Open Orders
          - link "Orders" [ref=e385] [cursor=pointer]:
            - /url: /crmsfa/control/findOrders?partyIdSearch=10721&performFind=Y
        - generic [ref=e390]:
          - generic [ref=e391]: Opportunities
          - link "Create New" [ref=e393] [cursor=pointer]:
            - /url: /crmsfa/control/createOpportunityForm?contactPartyId=10721
        - generic [ref=e395]:
          - generic [ref=e399]:
            - generic [ref=e400]: Payment and Shipping Accounts
            - combobox [ref=e402]:
              - option "Create New" [selected]
              - option "..."
              - option "EFT Account"
              - option "Gift Card"
              - option "Credit Card"
              - option "Tax Id"
              - option "Shipping Account"
          - generic [ref=e403]: No payment method information on file.
        - generic [ref=e408]:
          - generic [ref=e409]: Cases
          - link "Create New" [ref=e411] [cursor=pointer]:
            - /url: /crmsfa/control/createCaseForm?contactPartyId=10721
        - generic [ref=e412]:
          - generic [ref=e416]:
            - generic [ref=e417]: Activities History
            - generic [ref=e418]:
              - link "Log Call" [ref=e419] [cursor=pointer]:
                - /url: logTaskForm?partyId=10721&workEffortPurposeTypeId=WEPT_TASK_PHONE_CALL
              - link "Log Email" [ref=e420] [cursor=pointer]:
                - /url: logTaskForm?partyId=10721&workEffortPurposeTypeId=WEPT_TASK_EMAIL&duration=0%3A00
          - table [ref=e421]:
            - rowgroup [ref=e422]:
              - row "Type Purpose Activity Status Started Date Completion Date Remove" [ref=e423]:
                - cell "Type" [ref=e424]:
                  - link "Type" [ref=e426] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&completedActivitiesOrderBy=workEffortTypeId#ListCompletedActivities
                - cell "Purpose" [ref=e427]:
                  - link "Purpose" [ref=e429] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&pendingActivitiesOrderBy=workEffortPurposeTypeId#ListCompletedActivities
                - cell "Activity" [ref=e430]:
                  - link "Activity" [ref=e432] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&completedActivitiesOrderBy=workEffortName#ListCompletedActivities
                - cell "Status" [ref=e433]:
                  - link "Status" [ref=e435] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&completedActivitiesOrderBy=currentStatusId#ListCompletedActivities
                - cell "Started Date" [ref=e436]:
                  - link "Started Date" [ref=e438] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&completedActivitiesOrderBy=estimatedStartDate#ListCompletedActivities
                - cell "Completion Date" [ref=e439]:
                  - link "Completion Date" [ref=e441] [cursor=pointer]:
                    - /url: /crmsfa/control/viewContact?partyId=10721&completedActivitiesOrderBy=estimatedCompletionDate#ListCompletedActivities
                - cell "Remove" [ref=e442]
        - generic [ref=e443]:
          - generic [ref=e448]: Catalog Requests
          - table [ref=e449]:
            - rowgroup [ref=e450]:
              - row "Date Address Taken By Fulfilled" [ref=e451]:
                - cell "Date" [ref=e452]
                - cell "Address" [ref=e453]
                - cell "Taken By" [ref=e454]
                - cell "Fulfilled" [ref=e455]
        - generic [ref=e456]:
          - generic [ref=e460]:
            - generic [ref=e461]: Bookmarks and Files
            - generic [ref=e462]:
              - link "Bookmark URL" [ref=e463] [cursor=pointer]:
                - /url: /crmsfa/control/addContentUrlForContact?partyId=10721
              - link "Upload File" [ref=e464] [cursor=pointer]:
                - /url: /crmsfa/control/uploadContentForContact?partyId=10721
          - table [ref=e465]:
            - rowgroup [ref=e466]:
              - row "Name Classification Description Created Date" [ref=e467]:
                - cell "Name" [ref=e468]
                - cell "Classification" [ref=e469]
                - cell "Description" [ref=e470]
                - cell "Created Date" [ref=e471]
                - cell [ref=e472]
                - cell [ref=e473]
        - generic [ref=e474]:
          - generic [ref=e478]:
            - generic [ref=e479]: Notes
            - link "Create New" [ref=e481] [cursor=pointer]:
              - /url: createContactNoteForm?partyId=10721
          - table [ref=e482]:
            - rowgroup [ref=e483]:
              - row "Note Info Created By Note Date Time" [ref=e484]:
                - cell "Note Info" [ref=e485]
                - cell "Created By" [ref=e486]
                - cell "Note Date Time" [ref=e487]
                - cell [ref=e488]
      - generic [ref=e490]:
        - link "© 2026 Testleaf." [ref=e491] [cursor=pointer]:
          - /url: https://testleaf.com
        - text: All rights reserved.
  - iframe
  - iframe
```

# Test source

```ts
  1  | import { test , expect } from "../fixtures/testFixtures";
  2  | import { CreateContactPage } from "../pages/CreateContactPage";
  3  | import { getUniqueName } from '../utils/datautils'
  4  | 
  5  | test('@smoke Create Contact ', async({page, homePage})=>{
  6  | 
  7  |     const firstName = getUniqueName("krish_");
  8  |     const lastname = getUniqueName("jk_");
  9  |     const description = getUniqueName("Description_");
  10 | 
  11 |     await homePage.clickCreatecContact();
  12 | 
  13 |     const createContactPage = new CreateContactPage(page);
  14 |     createContactPage.craeteContact(firstName, lastname, description);
> 15 |     await expect(createContactPage.deactivateAccountButton).toBeVisible();
     |                                                             ^ Error: expect(locator).toBeVisible() failed
  16 | 
  17 | })
  18 | 
```