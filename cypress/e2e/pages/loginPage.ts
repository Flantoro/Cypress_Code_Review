/// <reference types="cypress" />

class LoginPage {
    get signinLink() { return cy.get('.login') }
    //Code Review: Don't use shortcuts for naming variables or methods, it is better to use full name (email Address Text, signInButton etc.)
    get emailAddressTxt() { return cy.get('#email') }
    get passwordTxt() { return cy.get('#passwd') } //Code Review: This selector looks like invalid one, the correct one should looks like '#password'
    get signinBtn() { return cy.get('#SubmitLogin') } //Code Review: The camel case style was not followed in this naming, the correct one is signInButton
    get alertBox() { return cy.get('p:contains("error")')} 
    //^Code Review: Avoid such selectors since in case the language of the website is changed it will be not possible to find such element^
    get alertMessage() { return cy.get('.alert-danger > ol > li') }
    
    public launchApplication() {
        cy.visit('/')
    }

    public login(emailId: string, password: string) {
        this.signinLink.click()
        this.emailAddressTxt.type(emailId)
        this.passwordTxt.type(password)
        this.signinBtn.click()
    }

    public validateLoginError(errorMessage: string) {
        this.alertBox.should('be.visible')
        this.alertMessage.should('have.text', errorMessage)

    }
}
export const loginPage: LoginPage = new LoginPage()