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
    const userInputEl = document.querySelector('#message-input');
    const newPEl = document.createElement('p');
    newPEl.id = 'message';
    newPEl.textContent = userInputEl.value;
    this.mainContainerEl.append(newPEl);

    document.querySelector('#message-input').value = '' // resets the user input field
    // console.log('Thanks for clicking me!');
  }

  hideMessage() {
    const pEls = document.querySelectorAll('p');
    pEls.forEach((p) => p.remove());
    // console.log("... and now I'm gone!");
  }
}

module.exports = MessageView;
