import { replace } from '../../utils/render';
import AbstractView from '../AbstractView';
import ButtonView from '../ButtonView/ButtonView';

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

    this.#button = Button;
  };
}

export default FooterTopView;
