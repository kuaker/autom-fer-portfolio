import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../support/modules/Header";
import AssertLoginPage from "../../support/assertPages/AssertLoginPage";

When('I click on "Signup Login" button', () => {
    Header.clickOnLoginSignUpButton();
});

Then('I verify New User Signup! is visible', () => {
    AssertLoginPage.checkSignUpTitleIsVisible();
});
