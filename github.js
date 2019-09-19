class Github {
  constructor() {
    this.client_id = "3b6201d33cd270d3e41c";
    this.client_secret = "44c51588dc54f3cbf96bf2719a6f5eb737bfaa56";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_Sseret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
