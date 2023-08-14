import { test } from "../../fixtures/apiContext";
import { EMP_ENDPOINT, EMP_NAME, EMP_SALARY } from "../../resources/constant";
import { ApiActions } from "../api-services/apiActions";

test("Verify Michael Silva Salary", async ({ apiContext }) => {
  try {
    const apiActions = new ApiActions(apiContext);

    const response = await apiActions.getRequest(EMP_ENDPOINT);
    await apiActions.verifyStatusOk(response);
    await apiActions.verifyEmployeeSalary(await response.json(), EMP_NAME, EMP_SALARY);
  } catch (error) {
    console.log(error);
  }
});
