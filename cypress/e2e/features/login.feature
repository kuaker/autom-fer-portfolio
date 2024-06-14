Feature: Login

    Login tests

    Background: I navigate the website
        Given I navigate to home page
        Then I verify that home page is visible successfully

    Scenario: Sign up as a user and create and account
        When I click on "Signup Login" button
        Then I verify New User Signup! is visible
        When I enter name and email address in sign up form
        And I click Signup button
        Then I verify that ENTER ACCOUNT INFORMATION is visible
        When I fill details: Title, Name, Email, Password, Date of birth
        And I Select checkbox Sign up for our newsletter!
        And I select checkbox Receive special offers from our partners!
        And I fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        And I click Create Account button
        Then I verify that ACCOUNT CREATED! is visible
        When I click Continue button
        Then I verify that Logged in as username is visible