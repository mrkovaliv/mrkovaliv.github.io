class UpdateCard {
  #data = {
    status: "",
    title: "",
    description: "",
  };

  async update(jwt, id, status, title, description) {
    this.#data.status = status;
    this.#data.title = title;
    this.#data.description = description;
    const url = `https://radiant-temple-07706.herokuapp.com/cards/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(this.#data),
      headers: {
        Authorization: "Bearer " + jwt,
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
}

export default new UpdateCard();
