# How to setup mocha for tessting:

    1-install mocha for the project only:
            npm install --save-dev mocha
        add this script in the package.json file
                    "scripts": {
                        "test": "mocha"
                    }

    2- create a dir called "test": it will contain all your test.js files

    3- inside "test", create "setup.js" file

    4- copy paste this inside "setup.js":
            
                const fs = require('fs');
                const { JSDOM } = require('jsdom');

                // 1. Read your index.html file
                const html = fs.readFileSync('../path-to-index-file/index.html', 'utf-8');

                // 2. Initialize JSDOM with your full HTML
                const dom = new JSDOM(html);
                global.document = dom.window.document;
                global.window = dom.window;


    5- write your test functions inside a test.js file, then use [npm test] to run the mocha test

---

# DOM Manipulation Assertion Cheat Sheet

## **1. CREATE Operations**

| DOM Method            | Mocha Assertion | Cypress Assertion | Sinon Spy/Stub |
|-----------------------|----------------|------------------|---------------|
| `document.createElement()` | `expect(elm.nodeName).to.equal('DIV')` | `cy.get('div').should('exist')` | `sinon.spy(document, 'createElement')` |
| `element.appendChild()` | `expect(parent.childNodes).to.include(child)` | `cy.get('#parent').should('contain', child)` | `sinon.spy(parent, 'appendChild')` |
| `element.insertBefore()` | `expect(parent.childNodes[0]).to.equal(newNode)` | `cy.get('#parent').children().first().should('have.id', 'newNode')` | `sinon.spy(parent, 'insertBefore')` |
| `element.cloneNode()` | `expect(clone).to.not.equal(original)` | `cy.get('#original').should('not.equal', '#clone')` | `sinon.spy(element, 'cloneNode')` |
| `document.write()` | `expect(document.body.innerHTML).to.include('text')` | N/A (avoid in Cypress) | `sinon.stub(document, 'write')` |
---
## **2. READ Operations**

| DOM Method            | Mocha Assertion | Cypress Assertion | Sinon Spy/Stub |
|-----------------------|----------------|------------------|---------------|
| `document.getElementById()` | `expect(elm.id).to.equal('test')` | `cy.get('#test').should('exist')` | `sinon.spy(document, 'getElementById')` |
| `document.querySelector()` | `expect(elm).to.exist` | `cy.get('.class').should('exist')` | `sinon.spy(document, 'querySelector')` |
| `element.textContent` | `expect(elm.textContent).to.include('text')` | `cy.get('p').should('contain', 'text')` | N/A |
| `element.innerHTML` | `expect(elm.innerHTML).to.include('<span>')` | `cy.get('#container').should('have.html', '<span>')` | N/A |
| `element.getAttribute()` | `expect(elm.getAttribute('href')).to.equal('/path')` | `cy.get('a').should('have.attr', 'href', '/path')` | `sinon.spy(element, 'getAttribute')` |
---
## **3. UPDATE Operations**

| DOM Method            | Mocha Assertion | Cypress Assertion | Sinon Spy/Stub |
|-----------------------|----------------|------------------|---------------|
| `element.setAttribute()` | `expect(elm.getAttribute('data-test')).to.equal('value')` | `cy.get('div').should('have.attr', 'data-test', 'value')` | `sinon.spy(element, 'setAttribute')` |
| `element.classList.add()` | `expect(elm.classList.contains('active')).to.be.true` | `cy.get('#btn').should('have.class', 'active')` | `sinon.spy(elm.classList, 'add')` |
| `element.style` | `expect(getComputedStyle(elm).color).to.equal('rgb(255, 0, 0)')` | `cy.get('div').should('have.css', 'color', 'rgb(255, 0, 0)')` | N/A |
| `element.replaceWith()` | `expect(parent.contains(oldElm)).to.be.false` | `cy.get('#old').should('not.exist')` | `sinon.spy(oldElm, 'replaceWith')` |
| `element.replaceChild()` | `expect(parent.contains(newChild)).to.be.true` | `cy.get('#parent').should('contain', '#newChild')` | `sinon.spy(parent, 'replaceChild')` |
---
## **4. DELETE Operations**

| DOM Method            | Mocha Assertion | Cypress Assertion | Sinon Spy/Stub |
|-----------------------|----------------|------------------|---------------|
| `element.remove()` | `expect(document.contains(elm)).to.be.false` | `cy.get('#to-remove').should('not.exist')` | `sinon.spy(element, 'remove')` |
| `element.removeChild()` | `expect(parent.contains(child)).to.be.false` | `cy.get('#parent').should('not.contain', '#child')` | `sinon.spy(parent, 'removeChild')` |
| `element.innerHTML = ''` | `expect(elm.children.length).to.equal(0)` | `cy.get('#container').should('be.empty')` | N/A |
| `element.textContent = ''` | `expect(elm.textContent).to.be.empty` | `cy.get('div').should('be.empty')` | N/A |
| `element.classList.remove()` | `expect(elm.classList.contains('class')).to.be.false` | `cy.get('#elm').should('not.have.class', 'removed')` | `sinon.spy(elm.classList, 'remove')` |

### Notes:
1. **Mocha**: Typically used with assertion libraries like Chai (`expect`, `assert`)
2. **Cypress**: Has built-in Chai assertions with retry logic
3. **Sinon**: Best for spying on method calls or stubbing behavior
4. For **event listeners**, you'd typically use `sinon.spy(element, 'addEventListener')` and assert on call counts/args

---

# **BOM Methods Assertion Cheat Sheet**

## **1. CREATE Operations**  
*(Methods that create or open new browser contexts, windows, or storage)*  

| BOM Method            | Mocha Assertion | Cypress Assertion | Sinon Spy/Stub |
|----------------------|----------------|------------------|---------------|
| `window.open()` | `expect(newWindow).to.exist` | `cy.stub(win, 'open').as('open')`<br>`cy.get('@open').should('be.calledWith', 'url')` | `sinon.stub(window, 'open').returns(fakeWindow)` |
| `localStorage.setItem()` | `expect(localStorage.getItem('key')).to.equal('value')` | `cy.window().its('localStorage').invoke('getItem', 'key').should('eq', 'value')` | `sinon.spy(localStorage, 'setItem')` |
| `sessionStorage.setItem()` | `expect(sessionStorage.getItem('key')).to.equal('value')` | `cy.window().its('sessionStorage').invoke('getItem', 'key').should('eq', 'value')` | `sinon.spy(sessionStorage, 'setItem')` |
| `document.cookie = ...` | `expect(document.cookie).to.include('key=value')` | `cy.getCookie('key').should('have.property', 'value', 'value')` | `sinon.spy(Object.getOwnPropertyDescriptor(Document.prototype, 'cookie'), 'set')` |

---

## **2. READ Operations**  
*(Methods that retrieve BOM-related data)*  

| BOM Method            | Mocha Assertion | Cypress Assertion | Sinon Spy/Stub |
|----------------------|----------------|------------------|---------------|
| `window.location.href` | `expect(window.location.href).to.include('example.com')` | `cy.url().should('include', 'example.com')` | `sinon.spy(window.location, 'href', ['get'])` |
| `window.innerWidth` | `expect(window.innerWidth).to.equal(1024)` | `cy.window().its('innerWidth').should('eq', 1024)` | N/A (property, not a method) |
| `localStorage.getItem()` | `expect(localStorage.getItem('key')).to.equal('value')` | `cy.window().its('localStorage').invoke('getItem', 'key').should('eq', 'value')` | `sinon.spy(localStorage, 'getItem')` |
| `sessionStorage.getItem()` | `expect(sessionStorage.getItem('key')).to.equal('value')` | `cy.window().its('sessionStorage').invoke('getItem', 'key').should('eq', 'value')` | `sinon.spy(sessionStorage, 'getItem')` |
| `document.cookie` | `expect(document.cookie).to.include('key=value')` | `cy.getCookie('key').should('have.property', 'value', 'value')` | `sinon.spy(Object.getOwnPropertyDescriptor(Document.prototype, 'cookie'), 'get')` |

---

## **3. UPDATE Operations**  
*(Methods that modify BOM properties or state)*  

| BOM Method            | Mocha Assertion | Cypress Assertion | Sinon Spy/Stub |
|----------------------|----------------|------------------|---------------|
| `window.location.assign()` | `expect(window.location.href).to.include('new-url')` | `cy.stub(win.location, 'assign').as('assign')`<br>`cy.get('@assign').should('be.calledWith', 'new-url')` | `sinon.spy(window.location, 'assign')` |
| `window.location.replace()` | `expect(window.location.href).to.include('new-url')` | `cy.stub(win.location, 'replace').as('replace')`<br>`cy.get('@replace').should('be.calledWith', 'new-url')` | `sinon.spy(window.location, 'replace')` |
| `window.history.pushState()` | `expect(window.location.pathname).to.equal('/new-path')` | `cy.window().its('history').invoke('pushState', {}, '', '/new-path')`<br>`cy.url().should('include', '/new-path')` | `sinon.spy(window.history, 'pushState')` |
| `window.history.replaceState()` | `expect(window.location.pathname).to.equal('/replaced-path')` | `cy.window().its('history').invoke('replaceState', {}, '', '/replaced-path')`<br>`cy.url().should('include', '/replaced-path')` | `sinon.spy(window.history, 'replaceState')` |
| `window.scrollTo()` | `expect(window.scrollY).to.equal(500)` | `cy.window().its('scrollY').should('eq', 500)` | `sinon.spy(window, 'scrollTo')` |

---

## **4. DELETE Operations**  
*(Methods that remove or clear BOM-related data)*  

| BOM Method            | Mocha Assertion | Cypress Assertion | Sinon Spy/Stub |
|----------------------|----------------|------------------|---------------|
| `localStorage.removeItem()` | `expect(localStorage.getItem('key')).to.be.null` | `cy.window().its('localStorage').invoke('removeItem', 'key')`<br>`cy.window().its('localStorage').invoke('getItem', 'key').should('be.null')` | `sinon.spy(localStorage, 'removeItem')` |
| `sessionStorage.removeItem()` | `expect(sessionStorage.getItem('key')).to.be.null` | `cy.window().its('sessionStorage').invoke('removeItem', 'key')`<br>`cy.window().its('sessionStorage').invoke('getItem', 'key').should('be.null')` | `sinon.spy(sessionStorage, 'removeItem')` |
| `localStorage.clear()` | `expect(localStorage.length).to.equal(0)` | `cy.window().its('localStorage').invoke('clear')`<br>`cy.window().its('localStorage').should('have.length', 0)` | `sinon.spy(localStorage, 'clear')` |
| `sessionStorage.clear()` | `expect(sessionStorage.length).to.equal(0)` | `cy.window().its('sessionStorage').invoke('clear')`<br>`cy.window().its('sessionStorage').should('have.length', 0)` | `sinon.spy(sessionStorage, 'clear')` |
| `document.cookie = 'expired'` | `expect(document.cookie).not.to.include('key=value')` | `cy.clearCookie('key')`<br>`cy.getCookie('key').should('be.null')` | `sinon.spy(Object.getOwnPropertyDescriptor(Document.prototype, 'cookie'), 'set')` |

---

### **Notes:**
- **Mocha**: Works with `chai` for assertions (e.g., `expect`, `assert`).
- **Cypress**: Has built-in assertions with retry logic (e.g., `should('exist')`).
- **Sinon**: Best for **spying** (check if a method was called) or **stubbing** (mocking behavior).
- Some BOM methods (like `window.open`) are restricted in Cypress, so **stubbing** is preferred.
- For **cookies**, Cypress has `cy.setCookie()`, `cy.getCookie()`, and `cy.clearCookie()`.

