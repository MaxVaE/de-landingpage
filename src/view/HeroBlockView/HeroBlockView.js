import { replace } from '../../utils/render';
import AbstractView from '../AbstractView';
import ButtonView from '../ButtonView/ButtonView';

function createHeroBlock() {
  return (
    `<section class="hero-block-view">
      <div class="hero-block-view__content">
        <h1 class="hero-block-view__title">
          New Automation Tool for Your Home
        </h1>
        <p class="hero-block-view__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          tristique vulputate ultrices ut mauris tellus at. Posuere
          sollicitudin odio tellus elit.
        </p>

        <button></button>
      </div>

      <div class="hero-block-view__image">
        <img src="./images/hero-block.svg" alt="burger" />
      </div>
    </section>`
  );
}

class HeroBlockView extends AbstractView {
  get template() {
    return createHeroBlock();
  }

  renderButton = () => {
    const button = this.element.querySelector('button');
    const Button = new ButtonView('See Our Project');
    replace(Button, button);
  };
}

export default HeroBlockView;
