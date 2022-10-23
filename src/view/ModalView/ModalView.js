import { render, RenderPosition } from '../../utils/render';
import AbstractView from '../AbstractView';
import PopupOkView from '../PopupOkView/PopupOkView';

function createModal() {
  return (
    `<div class="modal-view">
      <button class="modal-view__close">
        <img src="./images/close.svg" alt="close" />
      </button>

      <h2 class="modal-view__title">SEND US MESSAGE</h2>

      <form name="form" class="modal-view__form">
        <label class="modal-view__label">Full Name</label>
        <input name="fullName" class="modal-view__input" placeholder="Your Name">

        <label class="modal-view__label">Email</label>
        <input name="email" class="modal-view__input" placeholder="Your Email">

        <label class="modal-view__label">Message</label>
        <textarea name="message" class="modal-view__textarea" placeholder="Your Message"></textarea>

        <button name="submit" class="button-view">SUBMIT</button>
      </form>
    </div>`
  );
}

class ModalView extends AbstractView {
  get template() {
    return createModal();
  }

  init = () => {
    this.#initClose();
    this.#initSubmit();
  };

  #initClose = () => {
    const closeButton = this.element.querySelector('.modal-view__close');

    closeButton.addEventListener('click', this.#onCloseModal);

    setTimeout(() => {
      document.addEventListener('click', this.#onCloseModalOutClick);
    }, 1);

    document.addEventListener('keydown', this.#onKeydownModal);
  };

  #initSubmit = () => {
    const form = this.element.querySelector('[name="form"]');

    form.addEventListener('submit', this.#onSubmit);
  };

  #onCloseModal = () => {
    this.element.remove();
    document.removeEventListener('click', this.#onCloseModalOutClick);
    document.removeEventListener('keydown', this.#onKeydownModal);
  };

  #onCloseModalOutClick = (e) => {
    const isModal = e.composedPath().includes(this.element);

    if (!isModal) {
      this.#onCloseModal();
    }
  };

  #onKeydownModal = (e) => {
    const isClickedESC = e.keyCode === 27;
    const isClickedEnter = e.keyCode === 13;

    if (isClickedESC) {
      this.#onCloseModal();
    }

    if (isClickedEnter) {
      const buttonSubmit = this.element.querySelector('[name="submit"]');
      buttonSubmit.click();
    }
  };

  #onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const fullName = form.elements.fullName.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const values = { fullName, email, message };

    Object.keys(values).forEach((field) => this.#removeErrorForField(field));

    const isNoRequiredFields = this.#checkRequiredFields(values);

    if (isNoRequiredFields) {
      const main = document.querySelector('.main');
      const PopupOk = new PopupOkView('Your message successfully sent');

      render(main, PopupOk, RenderPosition.AFTERBEGIN);
      PopupOk.removeAfterFiveSeconds();

      this.#onCloseModal();
    }
  };

  #checkRequiredFields = (values) => {
    const errorFields = [];

    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        errorFields.push(key);
      }
    });

    const isNoRequiredFields = !errorFields.length;

    if (!isNoRequiredFields) {
      errorFields.forEach((field) => this.#addErrorForField(field));
    }

    return isNoRequiredFields;
  };

  #addErrorForField = (field) => {
    const fieldElement = this.element.querySelector(`[name="${field}"]`);

    fieldElement.classList.add('modal-view__error-field');
  };

  #removeErrorForField = (field) => {
    const fieldElement = this.element.querySelector(`[name="${field}"]`);

    fieldElement.classList.remove('modal-view__error-field');
  };
}

export default ModalView;
