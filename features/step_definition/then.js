import * as login from '../page_objects/login.page'

module.exports = function () {
    // login
    this.Then(/^an? "([^"]*)" message saying "([^"]*)" should appear$/, function (type, text) {
        login.doCompareText(type, text)
    })
    
    this.Then(/^a button "([^"]*)" leading back to the login form should exist$/, function (text) {
    	login.clickText(text)
    });
}
