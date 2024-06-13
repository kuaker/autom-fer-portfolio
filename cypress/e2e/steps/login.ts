import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../support/modules/Header";

When('I click on "Signup Login" button', () => {
    Header.clickOnLoginSignUpButton();
});