import { favouritePage } from './favourite.po';
import { browser, ElementArrayFinder } from 'protractor';

describe('favourite  page', () => {
    let page: favouritePage;

    beforeEach(() => {
        page = new favouritePage();
    });


    it('should have favourite Link in dashboard', () => {
        page.navigateToLogin();
        let loginUser = page.addLoginValues();
        page.clickSubmitButton();
        //page.navigateToDashBoard();
        expect(page.geFavouriteLink().isPresent())
            .toBeTruthy("favourite Link should be there in dashboard");
    });

    it('click on favourite link in dash board should navigate to favourite list', () => {
        page.navigateToDashBoard();
        page.clickFavouriteLink();
        browser.sleep(2000);
        expect(page.getFavouriteToolbar().isPresent())
            .toBeTruthy("Click on favourite link should navaigate to favourite component");
    });
});