import user from "./RegistrationLogIn";
import getCards from "./GetAllCards";
import board from "./Board";

class View {
  #reg_But = document.querySelector(".registr__log");
  #log_But = document.querySelector(".admission__reg");
  #log = document.querySelector(".admission__block");
  #reg = document.querySelector(".registr__block");
  #err_But = document.querySelector(".modal-error__close");
  #err = document.querySelector(".modal-error");
  #registrationForms = document.querySelector(".registration");
  render() {
    this.#log_But.addEventListener("click", () => {
      this.#log.classList.add("hide");
      this.#reg.classList.remove("hide");
    });
    this.#reg_But.addEventListener("click", () => {
      this.#reg.classList.add("hide");
      this.#log.classList.remove("hide");
    });
    this.#err_But.addEventListener("click", () => {
      this.#err.classList.add("hide");
      this.#registrationForms.classList.remove("hide");
    });
    this.#registration();
  }
  #registration() {
    document
      .querySelector(".admission__form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();
        const info = await user.singIN();
        this.#runCard(info);
      });
    document
      .querySelector(".registr__form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();
        const info = await user.registrate();
        this.#runCard(info);
      });
  }
  #runCard = async (info) => {
    document.querySelector(".registration").classList.add("hide");
    if (info.jwt) {
      const startCards = await getCards.get(info.jwt);
      board.run(startCards, info.jwt);
    } else {
      document.querySelector(".modal-error").classList.remove("hide");
    }
  };
}

export default new View();
