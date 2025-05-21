const assert = require("assert");
const sinon = require("sinon");
const jsdom = require("jsdom");
// const { expect } = require('chai');
const { JSDOM } = jsdom;
const { open_new_window, close_opened_window } = require("../js/script");


describe("newWindow", () => {
    let windowOpenStub;
//setup:
    beforeEach(() => {
        windowOpenStub = sinon.stub(window, "open");
    });

    afterEach(() => {
        windowOpenStub.restore();
    });

    //test1:[setup, call, assertion]
    it("should call window.open", () => {
      //setup if needed
      //call
      //assertion
        open_new_window();

        assert.strictEqual(windowOpenStub.called, true);
    });
});
