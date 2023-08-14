import { BasePageObject } from "./basePO";

export class AccountSingUpPageObjects extends BasePageObject {
  readonly newAccount: string = "Create a new account";
  readonly elemPTag: string = "p";
  readonly elemFirstName: string = "First Name";
  readonly elemLastName: string = "Last Name";
  readonly elemNewPassword: string = "New Password";
  readonly elemCheckbox: string = "I have read and agree to the Terms of Use and Customer Privacy Policy.";
  readonly elemSignUp: { name: string } = { name: "Sign up" };
}
