class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    // console.log(this.mainContainerEl);
  }

  addParagraph(text) {
    const newP = document.createElement('p');
    newP.textContent = `This paragraph is ${text}`;
    this.mainContainerEl.append(newP);
  }

  clearParagraphs() {
    const paras = document.querySelectorAll('p');
    paras.forEach(para => {
      para.remove();
    })
  }
}



module.exports = View;