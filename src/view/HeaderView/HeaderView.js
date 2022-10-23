import AbstractView from '../AbstractView';

function createHeader() {
  return (
    `<header class="header-view">
      <img src="./images/logo.svg" alt="logo" />

      <img src="./images/burger.svg" alt="burger" />
    </header>`
  );
}

class HeaderView extends AbstractView {
  get template() {
    return createHeader();
  }
}

export default HeaderView;
