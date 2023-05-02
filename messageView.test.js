/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');
let view;

describe('MessageView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    view = new MessageView();
  })

  it('clicks the show button', () => {
    const showButtonEl = document.querySelector('#show-message-button');
    showButtonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').textContent).toEqual("I am a teapot");
  });

  it('clicks the hide button', () => {
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});