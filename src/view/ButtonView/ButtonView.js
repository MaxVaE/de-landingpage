import AbstractView from '../AbstractView';

function createButton(text) {
  return (
    `<button class="button-view">
      ${text}
    </button>`
  );
}

class ButtonView extends AbstractView {
  constructor(text) {
    super();

    this.text = text;
  }

  get template() {
    return createButton(this.text);
  }
}

export default ButtonView;
