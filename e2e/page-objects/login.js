class Login {

    get continueButton() {
      return $("#logIn");
    }

    get loginWithEmptyInputFieldsMessage() {
      return $("//p[contains(text(),'required! fields')]");
    }
  
    async clickContinueButton() {
      await this.continueButton.click();
    }

    async waitForEmptyInputFieldsErrorMessage() {
      await this.loginWithEmptyInputFieldsMessage.waitForDisplayed();
    }
  
  }
  
  module.exports = new Login();