import { Driver } from "../../main/driver";
import { Expect } from "../../main/expect";
import { COLLECTIONS_URL, NETWORKIDLE } from "../../resources/constant";
import { CollectionsPageObjects } from "../page-objects/collectionsPO";

const expect = new Expect();
const collectionPO = new CollectionsPageObjects();
const { elemToast, elemCollection, elemDropdown, elemSignOut, elemHeader, products, toastSignedIn } = collectionPO;

export class Collections extends Driver {
  async verfiySignedInToast() {
    await expect.locatorsHaveText([{ locator: elemToast, text: toastSignedIn }]);
  }

  async verifyUserSignedIn() {
    await expect.locatorsHaveText([{ locator: elemCollection, text: products }]);
    await Driver.verifyPageUrl(COLLECTIONS_URL);
  }

  async signOut() {
    await this.clickDropdown();
    await Driver.getByText(elemSignOut).click();
    await expect.locatorsHaveAttribute([{ locator: elemHeader, name: "href", value: "/users/sign_in" }]);
  }

  private async clickDropdown() {
    await Driver.waitForLoadState(NETWORKIDLE);
    await Driver.getByLocator(elemDropdown).click();
  }
}
