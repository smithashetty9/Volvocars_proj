const { assert } = require('chai');
const Page = require('./page');

class OurCarsPage extends Page {

//Get the elements from Homepage
  
    get ourCarsPageLink() {
        return $('//*[@id="nav:topNavCarMenu"]/em');
    }
    get variantsTabList(){
        return $('div[role="tablist"]');
    }
   get hybridElement() {
        return $('button[id="site-nav-cars-menu-section-tab-1"]');
    }
    get electricElement() {
        return $('button[id="site-nav-cars-menu-section-tab-0"]');
    }
   get mildHybridElement() {
        return $('button[id="site-nav-cars-menu-section-tab-2"]');
    }
    get hybridSUVXC90(){
        return $('img[src="https://www.volvocars.com/images/site-navigation/2022/xc90-hybrid.png"]');
    }

    get hybridSUVXC60(){
        return $('img[src="https://www.volvocars.com/images/site-navigation/2022/xc60-hybrid.png"]');
    }

    get hybridSUVXC40(){
        return $('img[src="https://www.volvocars.com/images/site-navigation/2022/xc40-hybrid.png"]');
    }

    get hybridSUV4thModel(){
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[4]/a/div/div/div[1]');
    }
    get hybridEstateV90(){
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[5]/a/div/div/div[1]/em');
    }
    get hybridEstateV60(){
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[6]/a/div/div/div[1]/em');
    }
    get hybridEstate3rdModel(){
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[7]/a/div/div/div[1]');
    }
    get hybridSedanS90Recharge(){
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[8]/a/div/div/div[1]');
    }
    get hybridSedanS60Recharge(){
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[9]/a/div/div/div[1]');
    }
    get hybridSedan3rdModel(){
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[10]/a/div/div/div[1]');
    }

    get closeCars(){
        return $('//*[@id="vcc-site-nav"]/div/div/div[1]/div/div[2]/button');
    }
 
 //Actions
    //Clicks Our Cars button on the top right corner
    async clickOurCarsPageLink() {
        await this.ourCarsPageLink.click();
        console.log("Our cars page link is clicked");

    }
    //Clicks Hybrid Variant which is inside Cars Menu
    async clickhybdrid() {
        await this.hybridElement.click();
        console.log("hybrid element link is clicked");
    }
    
    ////Clicks Electric Variant which is inside Cars Menu
    async clickElectric(){
        await this.electricElement.click();
    }

    //Closes Our Cars Menu
    async closeCarsClick(){
        await this.closeCars.click();
    }

    //Verifies if Hybrid variant is selected by default in Cars Menu
    async verifyHybridDefault(){
        await this.hybridElement.waitForDisplayed();
        const hybridSelected = this.hybridElement.getAttribute('aria-selected');
        assert.equal(hybridSelected,'true')
    }

    //Verifies if Electric variant is greyed out in Cars Menu
    async VerifyElectricGreyed(){
        await this.electricElement.waitForDisplayed();
        const electricNotSelected = this.electricElement.getAttribute('aria-selected');
        assert.equal(electricNotSelected,'false')
    }

    //Verifies if Mild Hybrid variant is greyed out in Cars Menu
    async verifyMildHybridGreyed(){
        await this.mildHybridElement.waitForDisplayed();
        const mildHybridNotSelected = this.mildHybridElement.getAttribute('aria-selected');
        assert.equal(mildHybridNotSelected,'false')
    }

    //Verifies if Electric variant is selected in Cars Menu
    async VerifyElectricSelected(){
        await this.electricElement.waitForDisplayed();
        const electricSelected = this.electricElement.getAttribute('aria-selected');
        assert.equal(electricSelected,'true')
    }
    //Verifies if Hybrid variant is greyed out in Cars Menu
    async verifyHybridGreyed(){
        await this.hybridElement.waitForDisplayed();
        const hybridNotSelected = this.hybridElement.getAttribute('aria-selected');
        assert.equal(hybridNotSelected,'false')
    }

    open() {
        return super.open();
    }
}

module.exports = new OurCarsPage();