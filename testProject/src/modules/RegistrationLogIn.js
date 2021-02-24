class Registration {
  #urlRegister = "https://radiant-temple-07706.herokuapp.com/auth/local/register";

  #urlLogin = "https://radiant-temple-07706.herokuapp.com/auth/local";

  #data = {
    username: "",
    email: "",
    password: "",
  };

  #log = {
    identifier: "",
    password: "",
  };

  async #postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  async registrate() {
    const registration = document.querySelector(".registr__form");
    this.#data.email = registration.email.value;
    this.#data.username = registration.identifier.value;
    this.#data.password = registration.password.value;
    const promise = await this.#postData(this.#urlRegister, this.#data);
    return await promise;
  }

  async singIN() {
    const login = document.querySelector(".admission__form");
    this.#log.identifier = login.identifier.value;
    this.#log.password = login.password.value;
    const promise = await this.#postData(this.#urlLogin, this.#log);
    return await promise;
  }
}

export default new Registration();
