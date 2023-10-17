class ThirdPartyLogin {

    get getFacebookLoginButton() {
      return $("#btn-facebook-login");
    }

    get getGoogleLoginButton() {
      return $("#btn-google-login");
    }

    get getAppleLoginButton() {
      return $("#btn-apple-login");
    }

    async clickFacebookLoginButton() {
      await this.getFacebookLoginButton.click();
    }

    async clickGoogleLoginButton() {
      await this.getGoogleLoginButton.click();
    }

    async clickAppleLoginButton() {
      await this.getAppleLoginButton.click();
    }
  
  }
  
  module.exports = new ThirdPartyLogin();