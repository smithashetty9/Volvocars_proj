const { Given, When, Then, And } = require('@wdio/cucumber-framework');
const HomePage = require ('../pageobjects/home.page');
const OurCarsPage = require('../pageobjects/ourcars.page');
const CarSafetyPage = require('../pageobjects/carsafety.page');
let chai = require("chai");
const ourCarsPage = require('../pageobjects/ourcars.page');
let assert = chai.assert;

Given(/^the start page is the homepage$/, async () => {

    await HomePage.open();
    await HomePage.clickAcceptCookies();
    await expect(HomePage.homeTitle).toBeExisting();
    await expect(OurCarsPage.ourCarsPageLink).toBeExisting();

});
When(/^the Ourcars link is clicked on the top right corner$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();
    await expect(OurCarsPage.hybridElement).toBeExisting();
   
});
Then(/^3 SUV hybrid models of vehicles are present$/, async () => {

    await OurCarsPage.clickhybdrid();
    assert.equal(true,await OurCarsPage.hybridSUVXC40.isExisting());
    assert.equal(true,await OurCarsPage.hybridSUVXC60.isExisting())
    assert.equal(true,await OurCarsPage.hybridSUVXC90.isExisting())

});

Given(/^Homepage is launched$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();
    await HomePage.isCampaignPage()

});
When(/^Click in Our Cars link$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();
    await expect(OurCarsPage.hybridElement).toBeExisting();
   
});
Then(/^4th SUv model is not present$/, async () => {
   
    assert.equal(false,await OurCarsPage.hybridSUV4thModel.isExisting())  
});

Given(/^I am on the homepage$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();
    await HomePage.isCampaignPage()

});
When(/^ourCars is clicked$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();
    await expect(OurCarsPage.hybridElement).toBeExisting();
   
});
Then(/^Only 2 models of estate cars are seen under hybrid$/, async () => {
    
    let V90 = await OurCarsPage.hybridEstateV90.isExisting()
    let V60 = await OurCarsPage.hybridEstateV60.isExisting()
    let estateNoModel = await OurCarsPage.hybridEstate3rdModel.isExisting()
    assert.equal(true,V90)
    assert.equal(true,V60) 
    assert.equal(false,estateNoModel) 
    
});

Then(/^only 2 models of Sedan cars are seen under hybrid$/, async () => {
    
    let s90 = await OurCarsPage.hybridSedanS90Recharge.isExisting()
    let s60 = await OurCarsPage.hybridSedanS60Recharge.isExisting()
    let sedanNoModel = await OurCarsPage.hybridSedan3rdModel.isExisting()
    assert.equal(true,s90)
    assert.equal(true,s60) 
    assert.equal(false,sedanNoModel) 
    
});

When(/^I click on Car Safety link$/, async () => {

    await HomePage.clickCarSafetyLink();
       
});
Then(/^I will be navigated to Car Safety page$/, async () => {

    assert.equal(true,await CarSafetyPage.carSafetyHeader.isExisting())
    assert.equal(true, await CarSafetyPage.carimage.isExisting())
});

Then(/^Hybrid Variant is selected by default$/, async () => {
    
    OurCarsPage.verifyHybridDefault()
});

Then(/^Electric variant is greyed$/, async () => {
   
    OurCarsPage.VerifyElectricGreyed()
});

Then(/^Mild hybrids variant is greyed$/, async () => {
    
    OurCarsPage.verifyMildHybridGreyed()
});

Given(/^I am on our Cars page$/, async () => {
   
    OurCarsPage.variantsTabList.waitForDisplayed()
});
When(/^Electric variant is clicked$/, async () => {
    
    OurCarsPage.clickElectric()
});
Then(/^Electric Variant is enabled$/, async () => {
    
    OurCarsPage.VerifyElectricSelected()
});
Then(/^Hybrid variant is greyed$/, async () => {
   
    ourCarsPage.verifyHybridGreyed()
});







