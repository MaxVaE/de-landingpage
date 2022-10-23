import AbstractView from '../AbstractView';

function createLink() {
  return (
    `<a class="link-view">
      <span class="link-view__text">Learn more</span>
      <img class="link-view__image" src="./images/arrow.svg" alt="arrow" />
    </a>`
  );
}

class LinkView extends AbstractView {
  get template() {
    return createLink();
  }
}

export default LinkView;
