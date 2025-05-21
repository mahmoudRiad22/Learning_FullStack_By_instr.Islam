
const fs = require('fs');
const { JSDOM } = require('jsdom');

// 1. Read your index.html file
const html = fs.readFileSync('../Lec35-js-10/index.html', 'utf-8');

// 2. Initialize JSDOM with your full HTML
const dom = new JSDOM(html, {
    runScripts: "dangerously",  // Allows script execution
    resources: "usable"
});
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

module.exports = dom;