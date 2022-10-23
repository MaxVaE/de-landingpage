import AbstractView from '../AbstractView';

function createCell(text) {
  return (
    `<div class="cell-view">${text}</div>`
  );
}

class CellView extends AbstractView {
  #text = 0;

  constructor(text) {
    super();

    this.#text = text;
  }

  get template() {
    return createCell(this.#text);
  }
}

export default CellView;
