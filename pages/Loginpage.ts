// object/elements and methods of login page will be defined here//
import { Page } from '@playwright/test';
import { BaseClass } from '../Utils/BaseClass';
export class Loginpage extends BaseClass
{
    //locators of login page//
 static textbox_loginname="//input[@name='txtUserName']";
 static textboxpassword="//input[@name='txtPassword']";
 static login_btn ="//input[@name='Submit']";

//methods to be writtrn here//
static async login(username:string,password:string)
{
 await this.page.locator(this.textbox_loginname).fill(username);
 await this.page.locator(this.textboxpassword).fill(password);
 await this.page.locator(this.login_btn).click();
 console.log("Login is done successfully");

}
}