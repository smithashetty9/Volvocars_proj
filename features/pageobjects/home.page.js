//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

class HomePage extends Page {

    //Get the elements from Homepage

    get acceptCookies() {
        return $('div[class="optanon-alert-box-button-middle accept-cookie-container"]');
    }

   get homeTitle() {
        return $('img[src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg"]');
   }

   get headerText() {
        return $('//h2[@class="a ab ac ae af ag ah ai aj ak al am an ao ap aq ar as at au av"]');
   }
   get carSafety(){
    return $('//a[@data-autoid="iconCallouts:cta"]');
   }
   get careKey(){
    return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[4]/div[2]/div');
   }
   
//Actions
    //Accepts cookies
    async clickAcceptCookies() {
        await browser.maximizeWindow()
        await this.acceptCookies.click();
        console.log ("Accept cookies link is clicked");
        
    }

    //Verifies if Campaign page is displayed
    async isCampaignPage(){
        await this.headerText.waitForDisplayed()
    }

    //Clicks CarSafety Link in Campaign Homepage
    async clickCarSafetyLink(){
        browser.pause(5000);
        await this.careKey.scrollIntoView();
        await this.carSafety.click();
    }

    open() {
        return super.open();
        
    }
}

module.exports = new HomePage();