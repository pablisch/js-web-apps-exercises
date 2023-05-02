/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');
let view;

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    view = new View();
  });

  it('displays 2 paragraphs', () => {
    expect(document.querySelectorAll('p').length).toBe(2);
  });
  
  it('displays a title', () => {
    expect(document.querySelector('h1').textContent).toEqual('Hello');
  });
  
  it('displays a paragraph', () => {
    expect(document.querySelector('p').textContent).toEqual(
      "I'm a first paragraph"
      );
    });
    
  it('adds a paragraph', () => {
    view.addParagraph('a teapot');
    expect(document.querySelectorAll('p').length).toBe(3);
    expect(document.querySelectorAll('p')[2].textContent).toEqual("This paragraph is a teapot");
  });

  it('clears all paragraphs', () => {
    view.addParagraph('a teapot');
    expect(document.querySelectorAll('p').length).toBe(3);
    expect(document.querySelectorAll('p')[2].textContent).toEqual("This paragraph is a teapot");
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});
