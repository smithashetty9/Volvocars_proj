const Page = require('./page');

class CarSafetyPage extends Page{

 //Get the elements from Homepage
    get carSafetyHeader(){
        
        return $("//h2[@class='a ab ac ae af ag ah ai aj ak al am an ao ap aq ar as at au av']");
    }
    get carimage(){
        
        return $('img[src="https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/img/safety/volvo_s90_small_overlap_crash_test.jpg?h=527&iar=0&w=1229"]');
    }
}
module.exports = new CarSafetyPage();