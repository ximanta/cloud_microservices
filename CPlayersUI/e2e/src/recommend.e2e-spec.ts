import { recommendPage } from './recommend.po';
import { browser, ElementArrayFinder } from 'protractor';

describe('Recommend  page', () => {
    let page: recommendPage;

    beforeEach(() => {
        page = new recommendPage();
    });


    it('should have recommend Link in dashboard', () => {
        page.navigateToLogin();
        let loginUser = page.addLoginValues();
        page.clickSubmitButton();
        //page.navigateToDashBoard();
        expect(page.geRecommendLink().isPresent())
            .toBeTruthy("Recommend Link should be there in dashboard");
    });

    it('click on recommend link in dash board should navigate to recommend list', () => {
        page.navigateToDashBoard();
        page.clickFavouriteLink();
        browser.sleep(2000);
        expect(page.getRecommendToolbar().isPresent())
            .toBeTruthy("Click on recommend link should navaigate to recommend component");
    });
});