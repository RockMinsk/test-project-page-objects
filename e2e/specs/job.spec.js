const { browser, protractor } = require('protractor');

const Career = require('../support/page_objects/career.js');
const constant = require('../support/constants/constants.js')

let career = new Career();

describe("Testing the 'Job' page", function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
    });

    beforeEach(() => {
        job.get();
    });

    it("should open the 'Job' page - url is correct", () => {
        expect(browser.getCurrentUrl()).toEqual(constant.URL.JOB_PAGE);
    });

    describe("Testing Filter 'Relocation Help", () => {
        //TODO:
    })

    describe("Testing sorting option", () => {
        //TODO:
    });

    it("user can apply job opening", () => {
        //TODO:
    });

    it("user can share job opening", () => {
        //TODO:
    });

});