import { browser, by, element, ElementFinder, promise,ElementArrayFinder } from 'protractor';

export class searchPage {
    // navigate to login page
    navigateToLogin() {
        return browser.get('/login');
    }

    navigateToDashBoard() {
        return browser.get('/dashboard');
    }
    // get current URL
    getCurrentURL() {
        return browser.getCurrentUrl();
    }
    getloginComponent(): ElementFinder {
        return element(by.tagName('app-cric-login'));
      }

      getSearchListComponent(): ElementFinder {
        return element(by.tagName('app-cric-player-list'));
      }
    getUserNameInputBox(): ElementFinder {
        return element(by.className('username'));
      }
      getPasswordInputBox(): ElementFinder {
        return element(by.className('password'));
      }
    addLoginValues(): any {
        const login: any = this.getMockLoginDetail();
        this.getUserNameInputBox().sendKeys(login.username);
        this.getPasswordInputBox().sendKeys(login.password);
        return Object.keys(login).map(key => login[key]);
      }

    getMockLoginDetail(): any {
        const loginDetail: any = { username: 'test', password : 'test123'};
        return loginDetail;
     }
     getSubmitButton(): ElementFinder {
        return this.getloginComponent().element(by.buttonText('Login'));
      }
     clickSubmitButton(): promise.Promise<void> {
        return this.getSubmitButton().click();
      }

    // get login component
    getSearchComponent(): ElementFinder {
        return element(by.tagName('app-cric-search'));
    }
    // get username input box
    getPlayerNameInputBox(): ElementFinder {
        return element(by.name('pName'));
    }
    // getPlayerListCard(): ElementFinder {
    //     return element(by.name('name'));
    // }
    getSearchList(): ElementArrayFinder {
        return element.all(by.css('mat-card-title'))
        
    }
    getPlayerCard(name):ElementFinder {
        // let test=element.all(by.css('mat-card-title')).filter(function(element, index) {
        //     // Will print 0 First, 1 Second, 2 Third.
        //    return element.getText().then(function (text) {
        //       if(text==='Sachin Ramesh Tendulkar'){
        //           return element;
        //       }
        //     });
        //   });
        // test.count().then(function(value){console.log("count"+value);});  
 
       return   this.getSearchList().filter(function(elem, index) {
            return elem.getText().then(function(text) {
                if(text===name){
                    return elem;
                }
            });
      }).first();
       
    }
    // check username input box is exist or not
    isPlayerNameInputBoxPresent(): promise.Promise<boolean> {
        return this.getPlayerNameInputBox().isPresent();
    }
    

  
    getSearchButton(): ElementFinder {
        return this.getSearchComponent().element(by.buttonText('Search'));
    }
    // check submit button is present or not
    isSearchButtonPresent(): promise.Promise<boolean> {
        return this.getSearchButton().isPresent();
    }
    // click submit button
    clickSearchButton(): promise.Promise<void> {
        return this.getSearchButton().click();
    }
    
    getMockPlayerDetails(): any {
        const searchPlayerDetail: any = { name: 'sachin'};
        return searchPlayerDetail;
    }
    addPlayerNameValues(): any {
        const user: any = this.getMockPlayerDetails();
        this.getPlayerNameInputBox().sendKeys(user.name);
        return Object.keys(user).map(key => user[key]);
    }

}
