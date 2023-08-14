import { APIRequestContext, test as base } from "@playwright/test";
import { API_BASE_URL } from "../resources/constant";

type MyFixture = {
  apiContext: APIRequestContext;
};

export const test = base.extend<MyFixture>({
  apiContext: async ({ playwright }, use) => {
    const apiContext = await playwright.request.newContext({
      baseURL: API_BASE_URL,
      ignoreHTTPSErrors: true,
      extraHTTPHeaders: {
        Accept: "*/*",
      },
    });

    await use(apiContext);
  },
});
