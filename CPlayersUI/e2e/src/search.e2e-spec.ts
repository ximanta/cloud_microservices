import { searchPage } from './search.po';
import { browser, ElementArrayFinder } from 'protractor';

describe('seacrh  page', () => {
    let page: searchPage;

    beforeEach(() => {
        page = new searchPage();
    });

    it('Should have input for palyer name and submit button', () => {
    //     page.navigateToLogin();
    //     let loginUser = page.addLoginValues();
    //     page.clickSubmitButton();
    //    // page.navigateToDashBoradView();
    //     browser.sleep(5000)
    page.navigateToDashBoard();
        expect(page.getPlayerNameInputBox())
            .toBeTruthy(`<input  matInput  placeholder="Player name"   [formControl]="name"  > should exist in cric-search.component.html`);
       expect(page.isSearchButtonPresent()).toBeTruthy(`<button  mat-raised-button>Search</button> should
            exist in cric-register.component.html`);

    });

    it('it should search players and display the players in mat card grid', () => {
        page.navigateToLogin();
        let loginUser = page.addLoginValues();
        page.clickSubmitButton();
        //page.navigateToDashBoradView();
        // page.navigateToDashBoard();
        page.addPlayerNameValues();
        page.clickSearchButton();
        // page.navigateToDashBoradView();
        browser.sleep(5000)
        let playerCard = page.getPlayerCard("Sachin Ramesh Tendulkar");

        expect(playerCard.getText()).toEqual("Sachin Ramesh Tendulkar", "Search submit should  call 3rd party api and should get result");


    });




});