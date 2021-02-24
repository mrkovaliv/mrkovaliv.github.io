import updateCard from "./UpdateCard";

class Drag {
  #jwt = "";
  #allowDrop(event) {
    event.preventDefault();
  }

  #drop(event) {
    const id = event.dataTransfer.getData("text");
    event.currentTarget.append(document.getElementById(id));
    const card = document.getElementById(id);
    const tittleValue = card.querySelector(".card-desciption").value;
    const descriptionValue = card.querySelector(".card-title").value;
    const status = event.currentTarget.parentNode.className.slice(12);
    updateCard.update(this.#jwt, id, status, tittleValue, descriptionValue);
  }

  #getBlocks() {
    const blocks = document.querySelectorAll(".board-block");
    for (let block of blocks) {
      let list = block.querySelector(".board-block__list");
      list.addEventListener("dragover", this.#allowDrop);
      list.ondrop = (e) => {
        this.#drop(e, this.variable);
      };
    }
  }

  #dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  drag(elem, jwt) {
    this.#jwt = jwt;
    elem.draggable = "true";
    elem.addEventListener("dragstart", this.#dragStart);
    this.#getBlocks();
  }
}

export default new Drag();
