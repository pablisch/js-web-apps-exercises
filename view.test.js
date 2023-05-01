/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');
let view;

describe('Page view', () => {
  beforeEach(() => {
    view = new View();
  });

  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('displays a title', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    expect(document.querySelector('h1').textContent).toEqual('Hello');
  });

  it('displays a paragraph', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    expect(document.querySelector('p').textContent).toEqual(
      "I'm a first paragraph"
    );
  });

  it('adds a paragraph', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View(); // I don't know why this is needed but the test fails without it!
    view.addParagraph('a teapot');
    expect(document.querySelectorAll('p').length).toBe(3);
    expect(document.querySelectorAll('p')[2].textContent).toEqual("This paragraph is a teapot");
  });

  it('clears all paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View(); // I don't know why this is needed but the test fails without it!
    view.addParagraph('a teapot');
    expect(document.querySelectorAll('p').length).toBe(3);
    expect(document.querySelectorAll('p')[2].textContent).toEqual("This paragraph is a teapot");
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});
