class Login {

    get continueButton() {
      return $("#logIn");
    }

    get loginWithEmptyInputFieldsMessage() {
      return $("//p[contains(text(),'Please fill in all of the required fields')]");
    }

    get emailBox() {
      return $("#email");
    }

    get passwordBox() {
      return $("#password");
    }

    get invalidLoginMessage() {
        return $("//p[contains(text(),'recognize that email and/or password')]");
    }

    get expiredPasswordMessage() {
        return $("//p[contains(text(),'Password change required')]");
    }
  
    async clickContinueButton() {
      await this.continueButton.click();
    }

    async waitForEmptyInputFieldsErrorMessage() {
      await this.loginWithEmptyInputFieldsMessage.waitForDisplayed();
    }

    async enterEmailAddress(email) {
      await this.emailBox.addValue(email);
    }

    async enterPassword(password) {
      await this.passwordBox.addValue(password);
    }

    async waitForInvalidLoginMessageErrorMessage() {
        await this.invalidLoginMessage.waitForDisplayed();
    }

    async waitForExpiredErrorMessage() {
        await this.expiredPasswordMessage.waitForDisplayed();
    }
  
  }
  
  module.exports = new Login();