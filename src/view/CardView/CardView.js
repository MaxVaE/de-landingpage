import clsx from '../../utils/clsx';
import { replace } from '../../utils/render';
import AbstractView from '../AbstractView';
import LinkView from '../LinkView/LinkView';

function createCard({
  src, title, text, className,
}) {
  return (
    `<div class="card-view">
      <img class="${clsx('card-view__image', className)}" src="${src}" alt="${title}" />
      <h3 class="card-view__title">${title}</h3>
      <p class="card-view__text">${text}</p>
      <a></a>
    </div>`
  );
}

class CardView extends AbstractView {
  #src = '';

  #title = '';

  #text = '';

  #className = '';

  constructor({
    src, title, text, className = '',
  } = {}) {
    super();

    this.#src = src;
    this.#title = title;
    this.#text = text;
    this.#className = className;
  }

  get template() {
    return createCard({
      src: this.#src,
      title: this.#title,
      text: this.#text,
      className: this.#className,
    });
  }

  renderLink = () => {
    const link = this.element.querySelector('a');
    const Link = new LinkView();
    replace(Link, link);
  };
}

export default CardView;
