import AbstractView from '../AbstractView';

function createLine() {
  return (
    '<div class="footer-line-view"></div>'
  );
}

class FooterLineView extends AbstractView {
  get template() {
    return createLine();
  }
}

export default FooterLineView;
