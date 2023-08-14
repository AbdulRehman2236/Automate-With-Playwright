import MailSlurp from "mailslurp-client";
import { Driver } from "../../main/driver";
import { Expect } from "../../main/expect";
import { INewAccount } from "../../contracts/newAccount";
import { API_KEY, SIGNUP_URL } from "../../resources/constant";
import { AccountSingUpPageObjects } from "../page-objects/accountSignupPO";

const apiKey = API_KEY;
const signUpPO = new AccountSingUpPageObjects();
const expect = new Expect();

const {
  newAccount,
  elemPTag,
  elemFirstName,
  elemLastName,
  elemCheckbox,
  elemSignUp,
  elemNewPassword,
  elemButton,
  elemEmail,
  elemPageHeading,
} = signUpPO;

export class AccountSignUp extends Driver {
  async openSignUpPage() {
    await Driver.navigateToUrl(SIGNUP_URL);
    await expect.locatorsHaveText([{ locator: elemPageHeading, text: newAccount }]);
  }

  async createAccount(user: INewAccount) {
    const { firstName, lastName, email, password } = user;

    await Driver.getByPlaceholder(elemFirstName).fill(firstName);
    await Driver.getByPlaceholder(elemLastName).fill(lastName);
    await Driver.getByPlaceholder(elemEmail).fill(email);
    await Driver.getByPlaceholder(elemNewPassword).fill(password);
    await Driver.getByLabel(elemCheckbox).check();
    await Driver.getByRole(elemButton, elemSignUp).click();
  }

  async createMailInbox() {
    try {
      const mailslurp: MailSlurp = new MailSlurp({ apiKey });
      const { id, emailAddress } = await mailslurp.createInbox();
      return { mailslurp, id, emailAddress };
    } catch (error) {
      throw new Error(error);
    }
  }

  async renderHTML(mailslurp: MailSlurp, id: string) {
    try {
      const email = await mailslurp.waitForLatestEmail(id);
      const htmlBody: any = email.body;
      await Driver.setContent(htmlBody);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSignInUrl() {
    let singInURl = await Driver.getByLocator(elemPTag).nth(1).innerText();
    return singInURl.substring(13);
  }
}
