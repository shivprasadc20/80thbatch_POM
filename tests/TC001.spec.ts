//To provide Actual automation script//
import { test } from '@playwright/test';
import { BaseClass } from '../Utils/BaseClass';
import { CommonFun } from '../Utils/CommonFun';
import {Loginpage} from '../pages/LoginPage';
import{Logoutpage} from '../pages/LogoutPage';
import {verification} from '../pages/verification';

test('TC001',async({page})=>
{
    BaseClass.page=page;       

// below approach can also be used with object creation. but if we dont want to go with this approach 
// then we have to declara all methods and variables with static keyword
    // const obj=new Loginpage(page);
    // const obj1=new Logoutpage(page);
    // const obj2=new verification(page);
    // const commonobj=new CommonFun(page);
    // await commonobj.openapplication("https://sureshitacademy.in/hrms/login.php");
    // await commonobj.Waitstmt();
    // await obj.login("sureshit","sureshit");
    // await commonobj.Waitstmt();
    // await obj2.verifytitle("SureshIT");
    // await obj1.logout();  

     await CommonFun.openapplication("https://sureshitacademy.in/hrms/login.php");
     await Loginpage.login("sureshit","sureshit");
     await CommonFun.WaitStmt();
     await verification.verifytitle("HRMS");
     await Logoutpage.logout();
    });
    