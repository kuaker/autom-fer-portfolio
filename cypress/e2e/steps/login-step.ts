import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../support/modules/Header";
import AssertLoginPage from "../../support/assertPages/AssertLoginPage";
import LoginPage from "../../support/pages/LoginPage";
import AssertSignUpPage from "../../support/assertPages/AssertSignUpPage";
import SignUpPage from "../../support/pages/SignUpPage";
import AccountInformation from "../../support/modules/AccountInformation";
import AddressInformation from "../../support/modules/AddressInformation";
import AssertAccountCreatedPage from "../../support/assertPages/AssertAccountCreatedPage";
import AssertHeader from "../../support/assertPages/AssertHeader";

When('I click on "Signup Login" button', () => {
    Header.clickOnLoginSignUpButton();
});

Then('I verify New User Signup! is visible', () => {
    AssertLoginPage.checkSignUpTitleIsVisible();
});

When('I enter name and email address in sign up form', () => {
    LoginPage.fillNameAndEmailForSignUp();
});

Then('I click Signup button', () => {
    LoginPage.clickOnSignUpButton();
});

Then('I verify that ENTER ACCOUNT INFORMATION is visible', () => {
    AssertSignUpPage.checkAccountInformationTitleIsVisible();
});

When('I fill details: Title, Name, Email, Password, Date of birth', () => {
    SignUpPage.fillAccountInformation();
});

Then('I Select checkbox Sign up for our newsletter!', () => {
    AccountInformation.selectCheckBoxNewLetter().check();
});

Then('I select checkbox Receive special offers from our partners!', () => {
    AccountInformation.selectCheckBoxOfferss().check();
});

Then(
    'I fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number',
    () => {
        AddressInformation.fillFormWithInformation();
    },
);

Then('I click Create Account button', () => {
    SignUpPage.clickOnCreateAccountButton();
});

Then('I verify that ACCOUNT CREATED! is visible', () => {
    AssertAccountCreatedPage.checkAccountWasCreated();
});

Then('I verify that Logged in as username is visible', () => {
    AssertHeader.checkLoggedAsUsernameIsVisible();
});