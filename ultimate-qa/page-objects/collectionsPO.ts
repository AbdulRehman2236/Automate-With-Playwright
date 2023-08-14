import { BasePageObject } from "./basePO";

export class CollectionsPageObjects extends BasePageObject {
  readonly toastSignedIn: string = "Signed in successfully.";
  readonly products: string = "Products";
  readonly elemToast: string = ".message-text";
  readonly elemCollection: string = ".collections__heading";
  readonly elemDropdown: string = ".dropdown__toggle-button";
  readonly elemSignOut: string = "Sign Out";
  readonly elemHeader: string = ".header__nav-sign-in a";
}
