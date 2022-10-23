import { render, RenderPosition } from '../../utils/render';
import AbstractView from '../AbstractView';
import CellView from '../CellView/CellView';

function createBelovedClient() {
  return (
    `<section class="beloved-client-view">
      <div class="inner-layout beloved-client-view__inner">
        <div class="beloved-client-view__header">
          <h2 class="beloved-client-view__title">Our Beloved Client</h2>
          <p class="beloved-client-view__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>

        <div class="beloved-client-view__client-table">
          <div class="beloved-client-view__grid"></div>
        </div>
      </div>
    </section>`
  );
}

class BelovedClientView extends AbstractView {
  get template() {
    return createBelovedClient();
  }

  renderTable = () => {
    const clientTable = this.element.querySelector('.beloved-client-view__grid');
    const count = 8;

    for (let i = 0; i < count; i++) {
      if (i + 1 === count) {
        const cell = new CellView('More Client');
        render(clientTable, cell, RenderPosition.BEFOREEND);

        break;
      }

      const cell = new CellView(`LOGO CLIENT ${i + 1}`);
      render(clientTable, cell, RenderPosition.BEFOREEND);
    }
  };
}

export default BelovedClientView;
