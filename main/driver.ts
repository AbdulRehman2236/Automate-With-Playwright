import { Page, Locator, expect } from "@playwright/test";

export class Driver {
  static page: Page;

  constructor(page: Page) {
    Driver.page = page;
  }

  static async navigateToUrl(url: string) {
    await this.page.goto(url);
  }

  static async verifyPageUrl(url: string | RegExp) {
    await expect(this.page).toHaveURL(url);
  }

  static async checkedLocator(locator: string, options = { force: true }) {
    await this.page.check(locator, options);
  }

  static async setContent(html: string) {
    await this.page.setContent(html);
  }

  static getByLocator(locator: string, options?: { has?: Locator; hasText?: string | RegExp }) {
    return this.page.locator(locator, options);
  }

  static getByText(text: string, options = { exact: true }) {
    return this.page.getByText(text, options);
  }

  static getByPlaceholder(placeholder: string, options = { exact: true }) {
    return this.page.getByPlaceholder(placeholder, options);
  }

  static getByLabel(label: string, options = { exact: true }) {
    return this.page.getByLabel(label, options);
  }

  static getByRole(role: any, options?: any) {
    return this.page.getByRole(role, options);
  }

  static expectLocator(locator: string, index = 0) {
    return expect(this.page.locator(locator).nth(index));
  }

  static expectElement(element: any, message?: string) {
    return expect(element, message);
  }

  static async waitForLoadState(state: any) {
    await this.page.waitForLoadState(state);
  }

  static waitForEvent(event: any) {
    return this.page.waitForEvent(event);
  }
}
