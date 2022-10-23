import { render, replace, RenderPosition } from '../../utils/render';
import AbstractView from '../AbstractView';
import ButtonView from '../ButtonView/ButtonView';
import ModalView from '../ModalView/ModalView';

function createFooterTop() {
  return (
    `<div class="inner-layout footer-top-view">
      <div class="footer-top-view__content">
        <h2 class="footer-top-view__title">Intersted to woek with our team?</h2>
        <p class="footer-top-view__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>

      <button></button>
    </div>`
  );
}

class FooterTopView extends AbstractView {
  #button = null;

  get template() {
    return createFooterTop();
  }

  renderButton = () => {
    const button = this.element.querySelector('button');
    const Button = new ButtonView('Let’s Talk');
    replace(Button, button);

    Button.element.addEventListener('click', this.#onClickOpenModal);

    this.#button = Button;
  };

  #onClickOpenModal = () => {
    const Modal = new ModalView();
    const main = document.querySelector('.main');

    render(main, Modal, RenderPosition.BEFOREEND);
  };
}

export default FooterTopView;
