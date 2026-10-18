//To Provide common utitlity functions//
import { BaseClass } from './BaseClass';
import { Page } from '@playwright/test';
 export class CommonFun extends BaseClass
 {
   static async openapplication(url :string)
    {
     await this.page.goto(url);
     console.log("Application is opened successfully");
    }
  static async WaitStmt()
  {
    await this.page.waitForTimeout(3000);
  }
};