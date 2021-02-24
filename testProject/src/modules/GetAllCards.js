class GetCards {
  async get(jwt) {
    const url = "https://radiant-temple-07706.herokuapp.com/cards";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + jwt,
      },
    });
    return await response.json();
  }
}

export default new GetCards();
