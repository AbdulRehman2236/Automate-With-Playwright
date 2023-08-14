import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 120000,
  expect: {
    timeout: 60000,
  },
  //testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    viewport: null,
    actionTimeout: 240 * 100,
    channel: "chrome",

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://courses.ultimateqa.com",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
    launchOptions: {
      args: ["--start-maximized"],
    },
  },

  projects: [
    {
      name: "Ultimate-QA",
      testMatch: /.*account-sign-up.spec.ts/,
    },

    {
      name: "Api-Testing",
      testMatch: /.*get-api.spec.ts/,
    },
  ],
});
