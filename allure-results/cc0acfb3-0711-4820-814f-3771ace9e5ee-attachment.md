# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\createlead.spec.ts >> @smoke @regression Create Lead Test
- Location: tests\createlead.spec.ts:5:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://dev-dummy-url.com/
Call log:
  - navigating to "https://dev-dummy-url.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in dev-dummy-url.com.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running Windows Network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1  | import { test as base } from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";
  3  | import { LoginPage } from '../pages/LoginPage';
  4  | import { LandingPage } from '../pages/LandingPage';
  5  | import { CONFIG } from '../utils/config';
  6  | 
  7  | type MyFixtures = {
  8  |     homePage: HomePage;
  9  | };
  10 | 
  11 | export const test = base.extend<MyFixtures>({
  12 |     homePage: async ({ page }, use) => {
  13 | 
  14 |         // Navigate to app
  15 |         console.log(CONFIG.baseUrl)
> 16 |         await page.goto(CONFIG.baseUrl);
     |                    ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://dev-dummy-url.com/
  17 | 
  18 | 
  19 |         // Login
  20 |         const loginPage = new LoginPage(page);
  21 |         await loginPage.login(CONFIG.username, CONFIG.password);
  22 | 
  23 |         // Navigate to CRM/SFA
  24 |         const landingPage = new LandingPage(page);
  25 |         await landingPage.clickCrmSfa();
  26 | 
  27 |         // Create HomePage object
  28 |         const homePage = new HomePage(page);
  29 | 
  30 |         // Provide HomePage fixture to test
  31 |         await use(homePage);
  32 |     }
  33 | });
  34 | 
  35 | export { expect } from '@playwright/test';
```