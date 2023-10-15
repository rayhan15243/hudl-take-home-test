
describe('Hudl E2E Test Coverage', () => {
    it('Incorrect password', async () => {
        await browser.url('https://identity.hudl.com/login?state=hKFo2SBrS2lyVXIweHJlNmtRa1FVajZNWXY5NEMzTWo3ejVMdaFupWxvZ2luo3RpZNkgQ2x6cHdFenI2TE84ZS00N0hWc29tLUJnQVBaSzBvammjY2lk2SBuMTNSZmtIektvemFOeFdDNWRaUW9iZVdHZjRXalNuNQ&client=n13RfkHzKozaNxWC5dZQobeWGf4WjSn5&protocol=oauth2&response_type=id_token&redirect_uri=https%3A%2F%2Fwww.hudl.com%2Fapp%2Fusers%2Foidc%2Fcallback&scope=openid%20profile%20email&nonce=kPK6SiJGba418NtYzBVjNgz2a1d3cYVtsnygAREuJsY%3D&response_mode=form_post&screen_hint=')
        await expect(browser).toHaveTitle('Log In')
        const email = await $('#email')
        const password = await $('#password')
        const continueButton = await $('#logIn')
        const invalidLogin = await $("//p[contains(text(),'recognize')]")
        await email.addValue('rayhan15423@gmail.com')
		await password.addValue('test')
        await continueButton.click()
        await invalidLogin.waitForDisplayed()
    })
})