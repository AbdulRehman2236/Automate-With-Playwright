import { test } from "@playwright/test";
import { AccountSignUp } from "../services/accountSingUp";
import { AccountSignIn } from "../services/accountSingIn";
import { Collections } from "../services/collections";
import { NameStore } from "../../main/namestore";
import { PASSWORD } from "../../resources/constant";

test("Sign Up the Ultimate QA", async ({ context }) => {
  const page = await context.newPage();
  let signIn = new AccountSignIn(page);
  const signUp = new AccountSignUp(page);
  const collection = new Collections(page);
  let mail: any;

  try {
    await test.step("Open User Sign Up Page", async () => {
      await signUp.openSignUpPage();
    });

    await test.step("Create Mail Box", async () => {
      mail = await signUp.createMailInbox();
    });

    const newUser = {
      firstName: NameStore.getStringName(),
      lastName: NameStore.getStringName(),
      email: mail.emailAddress,
      password: PASSWORD,
    };

    await test.step("Verify New Account Created ", async () => {
      await signUp.createAccount(newUser);
      await collection.verifyUserSignedIn();
    });

    await test.step("Sign Out user ", async () => {
      await collection.signOut();
    });

    await test.step("Render Email Body in browser", async () => {
      await signUp.renderHTML(mail.mailslurp, mail.id);
    });

    await test.step("Open Sign In Page", async () => {
      const singInUrl = await signUp.getSignInUrl();
      signIn = new AccountSignIn(await context.newPage());
      await signIn.openSignInPage(singInUrl);
    });

    await test.step("Sign in with the user created", async () => {
      await signIn.singIn(mail.emailAddress, newUser.password);
      await collection.verfiySignedInToast();
      await collection.verifyUserSignedIn();
    });
  } catch (error) {
    console.log(error);
  } finally {
    await context.close();
  }
});
