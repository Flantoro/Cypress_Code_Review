import { loginPage } from "../pages/loginPage"; // Code Review: this import is not used in this file, thus it can be removed

describe('My Account Functionality', () => {
    // Code Review: beforeEach block can be removed since we have only one test here
    beforeEach(() => {
        cy.visit('https://google.com');
        //loginPage.launchApplication() // Code Review: Your code should not contain commented code
    })
    it('Sample Test', () => {
        console.log("This is a sample test")
    })
})