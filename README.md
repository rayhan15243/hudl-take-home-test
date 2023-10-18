# Hudl Take Home Test

This repo contains tests for the login functionality of the Hudl website.

## Prerequisites

- Node Version Manager (NVM) installed on your system. NVM allows you to easily switch between different Node.js versions. Instructions for installing NVM are provided below.
- Node.js version 16.20.2 (which can be installed using NVM).
- npm (which comes with Node.js).

## Setup

### Installing NVM

#### Windows

- Download the installer from the NVM
  for [Windows GitHub repository.](https://github.com/coreybutler/nvm-windows/releases)
- Run the downloaded executable and follow the on-screen instructions.
- Add to path if necessary (although this should be done automatically).

If you don't have admin privileges on your windows machine, install the `nvm-noinstall` version.
- Download the `nvm-noinstall.zip` file from https://github.com/coreybutler/nvm-windows/releases
- Extract the files to `C:/Users/<user_name>/nvm-noinstall` (Note: provide windows `<user_name>` in the command)
- Search for the `Edit environmental variables for your account` from windows search. Add the below variables for your account.

        NVM_HOME=C:\Users\<user_name>\nvm-noinstall
        NVM_SYMLINK=/path/to/nodejs (eg., C:\Program Files\nodejs)
- Now add the variables `%NVM_HOME%`, `%NVM_SYMLINK%` in the PATH (for more info https://dev.to/kasuken/install-node-version-manager-nvm-without-admin-rights-194f)

#### macOS and Linux

- Open the terminal and run the following command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

After the installation is complete, restart your terminal/ide.

For more detailed
instructions, [visit the official NVM GitHub repository](https://github.com/nvm-sh/nvm#installing-and-updating).

---

Installing dependencies & npm

- Afterwards, ensure that you have the correct Node.js version installed. In the terminal, execute:

```bash
nvm install 16.20.2
```

This command will install Node.js version 16.20.2 if it's not already installed.

- Set the active Node.js version to 16.20.2 using the following command:

```bash
nvm use 16.20.2
```

- Verify that the correct Node.js and npm versions are being used:

```bash
node -v
npm -v
```

The output should show v16.20.2 for Node.js and an appropriate version for npm.

- Install all the dependencies required to run the tests:

```bash
 npm install
```

Now you are ready to run the tests using the specified Node.js version.

Note:  If you have previous ran `npm install` using the wrong version, delete your `node_modules` folder, reset the repository to the state of main, then run `npm install` with the correct node version selected.

Create a .env file in the repo and add the following environment variable:

```bash
 PASSWORD=
```

To get the password, email the repo owner.
## Running the tests

To run the tests execute the below in the terminal.

```bash
 npm run wdio
```

Test results will appear in the terminal via the "spec" Reporter

## How I would improve this framework 

I would add a html reporter to make test results more clearer.

I would enable the tests to run in the CI.

## Known issues or workarounds you have used

There were issues with the Hudl site terms test and Hudl privacy policy test when implementing the Page Object model where it was not able to recognise the new tabs using switch window when the test click on those links. Adding the locators within the spec file resolved that issue.

For the Login with actual credentials test, it was not good practise to commit and push up an actual password, so I created an environment variable in the .env file in which the file type is in the .gitignore. In order to get the actual password, the repo user has to contact the repo owner to get the password, so that the repo user can add it to the environment variable. 



