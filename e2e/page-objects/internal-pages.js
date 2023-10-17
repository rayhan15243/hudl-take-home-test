class InternalPages {

    get getSiteTermsLink() {
      return $("#site-terms");
    }

    get getPrivacyPolicyLink() {
      return $("#privacy-policy");
    }

    async clickSiteTermsLink() {
      await this.getSiteTermsLink.click();
    }

    async clickPrivacyPolicyLink() {
      await this.getPrivacyPolicyLink.click();
    }
  
  }
  
  module.exports = new InternalPages();