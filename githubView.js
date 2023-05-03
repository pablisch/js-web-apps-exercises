class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button'); // button El
    const repoInputEl = document.querySelector('#repo-name-input'); // input El... not value

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value; // repoName = current value of input El

      this.client.getRepoInfo(repoName, (repoData)  => { // calls Client method, getRepoInfo with the cb, repoData
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) { // incomplete method to display data
    const h3NameEl = document.querySelector('#repo-name');
    const pDescriptionEl = document.querySelector('#repo-description');
    
    console.log(`name = ${repoData.name}`)
    this.model.getRepoInfo();
    h3NameEl.textContent = repoData.name;
    pDescriptionEl.textContent = repoData.description;
  }
}

// sinatra/sinatra

module.exports = GithubView;