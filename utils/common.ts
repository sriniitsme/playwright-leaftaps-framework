import { Page } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage' 
import { LandingPage } from '../pages/LandingPage' 
import { CONFIG } from '../utils/config'

export async function loginandNavigate(page:Page){
    
    await page.goto(CONFIG.baseUrl);

    // Login
    await page.waitForLoadState();
    const loginpage = new LoginPage(page);
    await loginpage.login(CONFIG.username, CONFIG.password);

    // Verify login
    const landingpage = new LandingPage(page);
    await landingpage.clickCrmSafe();
}