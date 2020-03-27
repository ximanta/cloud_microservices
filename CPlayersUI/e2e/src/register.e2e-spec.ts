import { registerPage } from './register.po';
import { browser } from 'protractor';

describe('register page', () => {
    let page: registerPage;

    beforeEach(() => {
        page = new registerPage();
    });

    it('should have  user info input elements', () => {
        page.navigateToRegister();
        expect(page.getFirstNameInputBox())
            .toBeTruthy(`<input  matInput  placeholder="First name"   [formControl]="firstname"  > should exist in login.component.html`);
        expect(page.getLastNameInputBox())
            .toBeTruthy(` <input  matInput  placeholder="Last Name"  [formControl]="lastname"  >should exist in login.component.html`);
        expect(page.isUserNameInputBoxPresent())
            .toBeTruthy(` <input  matInput  placeholder="UserName"  [formControl]="username"> should exist in login.component.html`);
        expect(page.isUserNameInputBoxPresent())
            .toBeTruthy(` <input class="password" type="password" matInput  placeholder="Password"   [formControl]="password"> should exist in cric-register.component.html`);
    });


    it('should get submit button', () => {
        page.navigateToRegister();
        expect(page.isSubmitButtonPresent()).toBeTruthy(`<button  mat-raised-button>Register</button> should
      exist in cric-register.component.html`);
    });

    it('User should get registered', () => {
        page.navigateToRegister();
        page.addRegisterUserValues();
        page.clickSubmitButton();
        browser.sleep(5000);

        page.getSubmitMessageElement().getText().then(function (name) {
            expect(name).toBe('User Registered');
        });

    });

    it('User should get error while re using same user name for registration', () => {
        page.navigateToRegister();
        page.addRegisterUserValues();
        page.clickSubmitButton();
        browser.sleep(5000);

        page.getSubmitMessageElement().getText().then(function (name) {
            expect(name).toBe('UserName Conflicts With An Existing User');
        });

    });






});
