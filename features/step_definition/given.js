module.exports = function () {
    this.Given(/^the web page "([^"]*)" is open$/, function (url) {
        browser.url(url)
    })
}
