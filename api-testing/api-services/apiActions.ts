import { APIRequestContext, APIResponse } from "@playwright/test";
import { Expect } from "../../main/expect";

const expect = new Expect();

export class ApiActions {
  apiContext: APIRequestContext;

  constructor(apiContext: APIRequestContext) {
    this.apiContext = apiContext;
  }

  async getRequest(endPoint: string) {
    return await this.apiContext.get(endPoint);
  }

  async verifyStatusOk(response: APIResponse) {
    await expect.elementsToBeOk([{ response: response, message: `Response Status: ${response.status()}` }]);
  }

  async verifyEmployeeSalary(responseBody: any, name: string, salary: number) {
    const data = await responseBody.data;
    for (const record of data) {
      if (record.employee_name === name)
        await expect.elementsToBe([
          { response: record.employee_salary, expected: salary, message: `Salary Recieved: ${record.employee_salary}` },
        ]);
    }
  }
}
