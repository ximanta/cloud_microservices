import { browser, by, element, ElementFinder, promise } from 'protractor';

export class registerPage {
    // navigate to login page
    navigateToRegister() {
        return browser.get('/register');
    }
    // get current URL
    getCurrentURL() {
        return browser.getCurrentUrl();
    }


    // get login component
    getRegisterComponent(): ElementFinder {
        return element(by.tagName('app-cric-register'));
    }
    // get username input box
    getUserNameInputBox(): ElementFinder {
        return element(by.name('username'));
    }
    getFirstNameInputBox(): ElementFinder {
        return element(by.name('firstname'));
    }
    getLastNameInputBox(): ElementFinder {
        return element(by.name('lastname'));
    }
    // check username input box is exist or not
    isUserNameInputBoxPresent(): promise.Promise<boolean> {
        return this.getUserNameInputBox().isPresent();
    }
    // get password input box
    getPasswordInputBox(): ElementFinder {
        return element(by.name('password'));
    }
    getSubmitMessageElement(): ElementFinder {
        return element(by.className('error-message'));
    }

    // check password input box is exist or not
    isPasswordInputBoxPresent(): promise.Promise<boolean> {
        return this.getPasswordInputBox().isPresent();
    }
    // get submit button
    getSubmitButton(): ElementFinder {
        return this.getRegisterComponent().element(by.buttonText('Register'));
    }
    // check submit button is present or not
    isSubmitButtonPresent(): promise.Promise<boolean> {
        return this.getSubmitButton().isPresent();
    }
    // click submit button
    clickSubmitButton(): promise.Promise<void> {
        return this.getSubmitButton().click();
    }
    // default values of input boxes
    getRegisterInputBoxesDefaultValues(): any {
        let inputFirstname, inputLastname, inputUsername, inputPassword;
        inputFirstname = this.getFirstNameInputBox().getAttribute('value');
        inputLastname = this.getLastNameInputBox().getAttribute('value');
        inputUsername = this.getUserNameInputBox().getAttribute('value');
        inputPassword = this.getPasswordInputBox().getAttribute('value');
        return Promise.all([inputFirstname, inputLastname, inputUsername, inputPassword]).then((values) => {
            return values;
        });
    }
    getMockRegisterUserDetails(): any {
        const registerUserDetail: any = { firstname: 'test', lastname: 'test', username: 'testuser', password: 'password' };
        return registerUserDetail;
    }
    addRegisterUserValues(): any {
        const user: any = this.getMockRegisterUserDetails();
        this.getFirstNameInputBox().sendKeys(user.firstname);
        this.getLastNameInputBox().sendKeys(user.lastname);
        this.getUserNameInputBox().sendKeys(user.username);
        this.getPasswordInputBox().sendKeys(user.password);
        return Object.keys(user).map(key => user[key]);
    }

}
