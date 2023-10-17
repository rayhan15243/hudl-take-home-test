const CreateAccount = require("../page-objects/create-account");
const InternalPages = require("../page-objects/internal-pages");
const Login = require("../page-objects/login");
const ThirdPartyLogin  = require("../page-objects/third-party-login");


describe('Hudl Login Functionality Test', () => {

    beforeEach(async () => {
        // Runs before each test in this describe block
        await browser.url('/login?state=hKFo2SBrS2lyVXIweHJlNmtRa1FVajZNWXY5NEMzTWo3ejVMdaFupWxvZ2luo3RpZNkgQ2x6cHdFenI2TE84ZS00N0hWc29tLUJnQVBaSzBvammjY2lk2SBuMTNSZmtIektvemFOeFdDNWRaUW9iZVdHZjRXalNuNQ&client=n13RfkHzKozaNxWC5dZQobeWGf4WjSn5&protocol=oauth2&response_type=id_token&redirect_uri=https%3A%2F%2Fwww.hudl.com%2Fapp%2Fusers%2Foidc%2Fcallback&scope=openid%20profile%20email&nonce=kPK6SiJGba418NtYzBVjNgz2a1d3cYVtsnygAREuJsY%3D&response_mode=form_post&screen_hint=')
        await expect(browser).toHaveTitle('Log In')
    });

    it('Login with empty input fields test', async () => {
        await Login.clickContinueButton()
        await Login.waitForEmptyInputFieldsErrorMessage()
    })

    it('Incorrect password test', async () => {
        await Login.enterEmailAddress("rayhan15243@gmail.com")
        await Login.enterPassword("1234")
        await Login.clickContinueButton()
        await Login.waitForInvalidLoginMessageErrorMessage()
    })

    it('Expired password test', async () => {
        await Login.enterEmailAddress("test@test.com")
        await Login.enterPassword("test")
        await Login.clickContinueButton()
        await Login.waitForExpiredErrorMessage()
    })

    it('Forgot password test', async () => {
        await Login.clickForgotPasswordLink()
        await expect(browser).toHaveTitle("Forgot Password")
        await Login.enterEmailReset("test@test.com")
        await Login.clickResetPasswordButton()
        await Login.waitForForgotPasswordMessage()
    })

    it('Create account test (fill in required fields)', async () => {
        await CreateAccount.clickCreateAccountLink()
        await expect(browser).toHaveTitle('Sign Up')
        await CreateAccount.clickCreateAccountButton()
        await CreateAccount.waitForCreateAccountErrorMessage()
    })

    it('Login with Facebook test', async () => {
        await ThirdPartyLogin.clickFacebookLoginButton()
        await expect(browser).toHaveTitle('Log in to Facebook | Facebook')
    })

    it('Login with Google test', async () => {
        await ThirdPartyLogin.clickGoogleLoginButton()
        await expect(browser).toHaveTitle('Sign in - Google Accounts')
    })

    it('Login with Apple test', async () => {
        await ThirdPartyLogin.clickAppleLoginButton()
        await expect(browser).toHaveUrlContaining('apple')
    })

    it('Hudl site terms test', async () => {
        const siteTermsLink = await $('#site-terms')
        await siteTermsLink.click()
        await browser.switchWindow('Hudl Site Terms')
        await expect(browser).toHaveTitle('Hudl Site Terms')
    })

    it('Hudl privacy policy test', async () => {
        const privacyPolicyLink = await $('#privacy-policy')
        await privacyPolicyLink.click()
        await browser.switchWindow('Hudl Privacy Policy')
        await expect(browser).toHaveTitle('Hudl Privacy Policy')
    })

    it('Succesful login test', async () => {
        await Login.enterEmailAddress("rayhan15243@gmail.com")
        await Login.enterPassword(process.env.PASSWORD)
        await Login.clickContinueButton()
        await expect(browser).toHaveTitle('Home - Hudl')
    })
    
})