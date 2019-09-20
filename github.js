class Github {
  constructor() {
    this.client_id = "3b6201d33cd270d3e41c";
    this.client_secret = "44c51588dc54f3cbf96bf2719a6f5eb737bfaa56";
    // Limiting repos
    this.repos_count = 5;
    // Order of the displaying repos
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_Sseret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_Sseret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    // Returning data
    return {
      profile,
      repos
    };
  }
}
