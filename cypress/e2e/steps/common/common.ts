import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/pages/HomePage";
import AssertHomePage from "../../../support/assertPages/AssertHomePage";
import AccountCreatedPage from "../../../support/pages/AccountCreatedPage";

Given('I navigate to home page', () => {
    HomePage.navigateToHomePage();
});


Then('I verify that home page is visible successfully', () => {
    AssertHomePage.checkSliderIsVisible();
});

When('I click Continue button', () => {
    AccountCreatedPage.clickOnContinueButton();
});