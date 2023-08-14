import { Driver } from "./driver";

export class Expect {
  async locatorsEnabled(locators: any[]) {
    await Promise.all(
      locators.map(async ({ locator, index = 0 }) => await Driver.expectLocator(locator, index).toBeEnabled())
    );
  }

  async locatorsDisabled(locators: any[]) {
    await Promise.all(
      locators.map(async ({ locator, index = 0 }) => await Driver.expectLocator(locator, index).toBeDisabled())
    );
  }

  async locatorsHaveText(locators: any[]) {
    await Promise.all(
      locators.map(async ({ locator, text, index = 0, haveText = true }) =>
        haveText
          ? await Driver.expectLocator(locator, index).toHaveText(text)
          : await Driver.expectLocator(locator, index).not.toHaveText(text)
      )
    );
  }

  async locatorsHaveAttribute(locators: any[]) {
    await Promise.all(
      locators.map(
        async ({ locator, name, value, index = 0 }) =>
          await Driver.expectLocator(locator, index).toHaveAttribute(name, value)
      )
    );
  }

  async elementsEnabled(elements: any[]) {
    await Promise.all(elements.map(async ({ element }) => await Driver.expectElement(element).toBeEnabled()));
  }

  async elementsDisabled(elements: any[]) {
    await Promise.all(elements.map(async ({ element }) => await Driver.expectElement(element).toBeDisabled()));
  }

  async elementsHaveText(elements: any[]) {
    await Promise.all(
      elements.map(async ({ element, text, haveText = true }) =>
        haveText
          ? await Driver.expectElement(element).toHaveText(text)
          : await Driver.expectElement(element).not.toHaveText(text)
      )
    );
  }

  async elementsToBeOk(elements: any[]) {
    await Promise.all(
      elements.map(async ({ response, message }) => await Driver.expectElement(response, message).toBeOK())
    );
  }

  async elementsToBe(elements: any[]) {
    await Promise.all(
      elements.map(async ({ response, expected, message = "" }) =>
        Driver.expectElement(response, message).toBe(expected)
      )
    );
  }
}
