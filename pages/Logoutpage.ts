// object/elements and methods of logout page will be defined here//
import { Page } from '@playwright/test';
import { BaseClass } from '../Utils/BaseClass';
export class Logoutpage extends BaseClass
{
    static logout_btn="//a[text()='Logout']";
static async logout()
{
    await this.page.locator(this.logout_btn).click();
    console.log("logout successfully");
}
}