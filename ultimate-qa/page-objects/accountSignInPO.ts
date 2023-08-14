import { BasePageObject } from "./basePO";

export class AccountSingInPageObjects extends BasePageObject {
  readonly welcomeBack: string = "Welcome Back!";
  readonly elemPassword: string = "Password";
  readonly elemSignIn: { name: string } = { name: "Sign in" };
}
