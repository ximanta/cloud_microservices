import { browser, by, element, ElementFinder, promise,ElementArrayFinder } from 'protractor';

export class favouritePage {
    // navigate to login page
    navigateToFavourite() {
        return browser.get('/favourite');
    }
 
    navigateToDashBoard() {
        return browser.get('/dashboard');
    }
   
    // get current URL
    getCurrentURL() {
        return browser.getCurrentUrl();
    }
    getFavouriteComponent(): ElementFinder {
        return element(by.tagName('app-cric-favour-list'));
      }

    getFavouriteList(): ElementArrayFinder {
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
        const loginDetail: any = { username: 'test', password : 'test123'};
        return loginDetail;
     }
    addLoginValues(): any {
        const login: any = this.getMockLoginDetail();
        this.getUserNameInputBox().sendKeys(login.username);
        this.getPasswordInputBox().sendKeys(login.password);
        return Object.keys(login).map(key => login[key]);
      }
    getFavouriteToolbar(): ElementFinder {
        return element(by.tagName('mat-toolbar'));
      }
    geFavouriteLink(): ElementFinder {
        return element(by.linkText('Favourites'))
    }
    clickSubmitButton(): promise.Promise<void> {
        return element(by.buttonText('Login')).click();
      }

    clickFavouriteLink(): promise.Promise<void> {
        return this.geFavouriteLink().click();
      }
}
