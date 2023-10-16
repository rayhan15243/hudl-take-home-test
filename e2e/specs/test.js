
describe('Hudl Login Functionality Automated Coverage', () => {

    beforeEach(async () => {
        // runs before each test in this block
        await browser.url('https://identity.hudl.com/login?state=hKFo2SBrS2lyVXIweHJlNmtRa1FVajZNWXY5NEMzTWo3ejVMdaFupWxvZ2luo3RpZNkgQ2x6cHdFenI2TE84ZS00N0hWc29tLUJnQVBaSzBvammjY2lk2SBuMTNSZmtIektvemFOeFdDNWRaUW9iZVdHZjRXalNuNQ&client=n13RfkHzKozaNxWC5dZQobeWGf4WjSn5&protocol=oauth2&response_type=id_token&redirect_uri=https%3A%2F%2Fwww.hudl.com%2Fapp%2Fusers%2Foidc%2Fcallback&scope=openid%20profile%20email&nonce=kPK6SiJGba418NtYzBVjNgz2a1d3cYVtsnygAREuJsY%3D&response_mode=form_post&screen_hint=')
        await expect(browser).toHaveTitle('Log In')
      });

    it('Incorrect password test', async () => {
        const email = await $('#email')
        const password = await $('#password')
        const continueButton = await $('#logIn')
        const invalidLogin = await $("//p[contains(text(),'recognize')]")
        await email.addValue('rayhan15423@gmail.com')
		await password.addValue('test')
        await continueButton.click()
        await invalidLogin.waitForDisplayed()
    })

    it('Forgot password test', async () => {
        const forgotPasswordLink = await $('#forgot-password')
        const emailResetBox = await $('#email-reset')
        const resetPasswordButton = await $('#btn-reset')
        const forgotPasswordMessage =  await $("//p[contains(text(),'reset password link')]")
        await forgotPasswordLink.click()
        await expect(browser).toHaveTitle('Forgot Password')
        await emailResetBox.addValue('test@test.com')
        await resetPasswordButton.click()
        await forgotPasswordMessage.waitForDisplayed()
    })

    it('Create account test', async () => {
        const createAccountLink = await $('#btn-show-signup')
        const createAccountButton = await $('#btn-signup')
        const createAccountErrorMessage =  await $("//p[contains(text(),'required fields')]")
        await createAccountLink.click()
        await expect(browser).toHaveTitle('Sign Up')
        await createAccountButton.click()
        await createAccountErrorMessage.waitForDisplayed()
    })

    it('Login with Facebook test', async () => {
        const facebookLoginButton = await $('#btn-facebook-login')
        await facebookLoginButton.click()
        await expect(browser).toHaveTitle('Log in to Facebook | Facebook')
    })

    it('Login with Google test', async () => {
        const googleLoginButton = await $('#btn-google-login')
        await googleLoginButton.click()
        await expect(browser).toHaveTitle('Sign in - Google Accounts')
    })

    it('Login with Apple test', async () => {
        const appleLoginButton = await $('#btn-apple-login')
        await appleLoginButton.click()
        await expect(browser).toHaveUrlContaining('apple')
    })

    
})