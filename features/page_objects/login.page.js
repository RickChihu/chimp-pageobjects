module.exports = {
    input: {
        email: 'input[name="login"]',
        password: 'input[name="password"]'
    },

    button: {
        login: 'input[type="submit"]'
    },

    alert: {
        error: '.text-danger',
        success: '.alert-success'
    },

    setValue: function(id, text) {
        browser.waitForExist(this.input[id], 10000)
        browser.setValue(this.input[id], text)
    },

    doClick: function(id) {
        browser.waitForExist(this.button[id], 10000)
        browser.click(this.button[id])
        browser.click(this.button[id])
    },

    doCompareText: function(alertType, text) {
        browser.waitForExist(this.alert[alertType], 10000)
        assert.equal(browser.getText(this.alert[alertType]), text, "Error")
    },

    clickText: function(text) {
        browser.waitForExist(`input[value="${text}"]`, 10000)
        browser.click(`input[value="${text}"]`)
        browser.waitForExist(`input[value="${text}"]`, 10000, true)
    }

}
