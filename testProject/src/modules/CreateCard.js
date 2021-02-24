class CreateCards {
  #url = "https://radiant-temple-07706.herokuapp.com/cards";

  #data = {
    status: "",
    title: "",
    description: "",
  };

  async create(jwt, status, title, description) {
    this.#data.status = status;
    this.#data.title = title;
    this.#data.description = description;
    const response = await fetch(this.#url, {
      method: "POST",
      body: JSON.stringify(this.#data),
      headers: {
        Authorization: "Bearer " + jwt,
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
}

export default new CreateCards();
