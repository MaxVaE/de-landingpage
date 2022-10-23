import AbstractView from '../AbstractView';

function createPopupOk(text) {
  return (
    `<div class="popup-ok-view">
      ${text}
    </div>`
  );
}

class PopupOkView extends AbstractView {
  #text = '';

  constructor(text) {
    super();

    this.#text = text;
  }

  get template() {
    return createPopupOk(this.#text);
  }

  removeAfterFiveSeconds = () => {
    setTimeout(() => {
      this.element.remove();
    }, 5000);
  };
}

export default PopupOkView;
