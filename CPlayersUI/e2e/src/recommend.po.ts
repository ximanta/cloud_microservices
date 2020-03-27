import { browser, by, element, ElementFinder, promise, ElementArrayFinder } from 'protractor';

export class recommendPage {
    // navigate to login page
    navigateToFavourite() {
        return browser.get('/recommend');
    }

    navigateToDashBoard() {
        return browser.get('/dashboard');
    }

    // get current URL
    getCurrentURL() {
        return browser.getCurrentUrl();
    }
    getRecommendComponent(): ElementFinder {
        return element(by.tagName('app-cric-recom-list'));
    }

    getRecommendList(): ElementArrayFinder {
        return element.all(by.css('cdk-row mat-row ng-star-inserted'));

    }
    navigateToLogin() {
        return browser.get('/login');
    }
    getUserNameInputBox(): ElementFinder {
        return element(by.className('username'));
    }
    getPasswordInputBox(): ElementFinder {
        return element(by.className('password'));
    }

    getMockLoginDetail(): any {
        const loginDetail: any = { username: 'test', password: 'test123' };
        return loginDetail;
    }
    addLoginValues(): any {
        const login: any = this.getMockLoginDetail();
        this.getUserNameInputBox().sendKeys(login.username);
        this.getPasswordInputBox().sendKeys(login.password);
        return Object.keys(login).map(key => login[key]);
    }
    getRecommendToolbar(): ElementFinder {
        return element(by.tagName('mat-toolbar'));
    }
    geRecommendLink(): ElementFinder {
        return element(by.linkText('Recommended'))
    }
    clickSubmitButton(): promise.Promise<void> {
        return element(by.buttonText('Login')).click();
    }

    clickFavouriteLink(): promise.Promise<void> {
        return this.geRecommendLink().click();
    }
}
