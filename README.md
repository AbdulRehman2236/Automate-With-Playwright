# Automate-With-Playwright

Automate-With-Playwright - This project is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.

## Getting Started

### Prerequisites

The following software is required:

- nodejs : Download and Install Node JS from:
  
  ```
  https://nodejs.org/en/download/
  ```
  
### Installation

1. Clone the repo using below URL:
   ```
   https://github.com/AbdulRehman2236/Automate-With-Playwright.git
   ```

3. Navigate to folder and install npm packages using:
   ```
   npm install
   ```

4. For first time installation run below command to download required browsers:
   ```
   npx playwright install
   ```

4. Install mailslurp for mail reading:
   ```
   npm install --save mailslurp-client
   ```

## Usage

1. For execution of all test cases i.e., UI and API test, use below command: 
   ```
   npx playwright test
   ```

2. For executing only UI test cases, use below command:
   ```
   npx playwright test --project=Ultimate-QA
   ```

3. For executing only api test cases, use below command:
   ```
   npx playwright test --project=Api-Testing
   ```
4. To Open the HTML Report, use below command:
   ```
   npx playwright show-report
   ```


