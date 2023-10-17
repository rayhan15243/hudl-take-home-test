class CreateAccount {

    get createAccountLink() {
      return $("#btn-show-signup");
    }

    get createAccountButton() {
      return $("#btn-signup");
    }

    get createAccountErrorMessage() {
      return $("//p[contains(text(),'required fields')]");
    }

    async clickCreateAccountLink() {
      await this.createAccountLink.click();
    }

    async clickCreateAccountButton() {
      await this.createAccountButton.click();
    }

    async waitForCreateAccountErrorMessage() {
      await this.createAccountErrorMessage.click();
    }

  }
  
  module.exports = new CreateAccount();