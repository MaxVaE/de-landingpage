import { render, RenderPosition } from '../../utils/render';
import AbstractView from '../AbstractView';
import CardView from '../CardView/CardView';

function createCards() {
  return (
    `<section class="inner-layout cards-view">
      <h2 class="cards-view__title">
        What we do to help
        our client grow in
        digital era,
      </h2>

      <div class="cards-view__items"></div>
    </section>`
  );
}

class CardsView extends AbstractView {
  #cards = [];

  constructor(cards) {
    super();

    this.#cards = cards;
  }

  get template() {
    return createCards();
  }

  renderCards = () => {
    const cardsElement = this.element.querySelector('.cards-view__items');

    this.#cards.forEach((card) => {
      const Card = new CardView(card);

      render(cardsElement, Card, RenderPosition.BEFOREEND);
      Card.renderLink();
    });
  };
}

export default CardsView;
