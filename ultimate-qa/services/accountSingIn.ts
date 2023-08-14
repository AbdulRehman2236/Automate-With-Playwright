import { Driver } from "../../main/driver";
import { Expect } from "../../main/expect";
import { AccountSingInPageObjects } from "../page-objects/accountSignInPO";

const singInPO = new AccountSingInPageObjects();
const expect = new Expect();
const { elemSignIn, elemEmail, elemPassword, elemButton, elemPageHeading, welcomeBack } = singInPO;

export class AccountSignIn extends Driver {
  async openSignInPage(singInUrl: string) {
    await Driver.navigateToUrl(singInUrl);
    await expect.locatorsHaveText([{ locator: elemPageHeading, text: welcomeBack }]);
  }

  async singIn(email: string, password: string) {
    await Driver.getByPlaceholder(elemEmail).fill(email);
    await Driver.getByPlaceholder(elemPassword).fill(password);
    await Driver.getByRole(elemButton, elemSignIn).click();
  }
}
