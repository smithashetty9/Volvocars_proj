/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    
    open() {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`)
        
    }
}
