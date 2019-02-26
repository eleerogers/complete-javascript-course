class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = 'e851738cdd54e5dd67255c8e9e79953b';
    // const key = '0ffc41ff6b2e2d69920c2c63d62a8925';
    try {
      this.result = await fetch(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
        .then(res => res.json());
    } catch (err) {
      console.log('error: ', err);
    }
  }
}

export default Search;
