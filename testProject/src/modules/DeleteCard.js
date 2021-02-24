class DeleteCard {
  async delete(jwt, id) {
    const url = `https://radiant-temple-07706.herokuapp.com/cards/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + jwt,
      },
    });
    return await response.json();
  }
}

export default new DeleteCard();
