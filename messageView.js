class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');

    this.showButtonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const newPEl = document.createElement('p');
    newPEl.id = 'message';
    newPEl.textContent = 'I am a teapot';
    this.mainContainerEl.append(newPEl);
    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    const pEls = document.querySelectorAll('p');
    pEls.forEach((p) => p.remove());
    console.log("... and now I'm gone!");
  }
}

module.exports = MessageView;
