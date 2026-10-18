
import {Page} from '@playwright/test';
import {BaseClass} from '../Utils/BaseClass';
import{expect} from '@playwright/test';
export class verification extends BaseClass
{
  static async verifytitle(expectedtitle :string)
    {
          await expect(this.page).toHaveTitle(expectedtitle);
          console.log("Page title is verified as: " + expectedtitle)
          }
        }
