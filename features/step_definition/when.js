import * as login from '../page_objects/login.page'

module.exports = function () {
    // login
    this.When(/^I type "([^"]*)" in the "([^"]*)" input$/, function (text, id) {
        login.setValue(id, text)
    })
    
    this.When(/^I click on the "([^"]*)" button$/, function (id) {
        login.doClick(id)
    })
}
