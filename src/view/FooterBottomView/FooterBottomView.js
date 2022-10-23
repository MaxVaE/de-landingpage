import AbstractView from '../AbstractView';

function createFooterBottom() {
  return (
    `<div class="inner-layout footer-bottom-view">
      <div class="footer-bottom-view__contact">
        <div class="footer-bottom-view__afrianska">
          <div class="footer-bottom-view__header">
            <img src="./images/logo-light.svg" alt="logo" />
            <h3>Afrianska</h3>
          </div>

          <div class="footer-bottom-view__info">
            <span>A.</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
          </div>

          <div class="footer-bottom-view__info">
            <span>T.</span>
            <span>+62-812-7313-4321</span>
          </div>

          <div class="footer-bottom-view__info">
            <span>E</span>
            <span>hello.afrian@gmail.com</span>
          </div>
        </div>

        <div class="footer-bottom-view__about-us">
          <h3 class="footer-bottom-view__title">About US</h3>

          <a class="footer-bottom-view__link">About</a>
          <a class="footer-bottom-view__link">What We Do</a>
          <a class="footer-bottom-view__link">Project</a>
          <a class="footer-bottom-view__link">How It Work With Us</a>
        </div>

        <div class="footer-bottom-view__follow-us">
          <h3 class="footer-bottom-view__title">Follow US</h3>

          <a class="footer-bottom-view__link">Instagram</a>
          <a class="footer-bottom-view__link">Facebook</a>
          <a class="footer-bottom-view__link">LinkedIn</a>
          <a class="footer-bottom-view__link">Youtube</a>
        </div>
      </div>

      <span class="footer-bottom-view__policy">
        2019 © Afrianska. All rights reserved.
      </span>
    </div>`
  );
}

class FooterBottomView extends AbstractView {
  get template() {
    return createFooterBottom();
  }
}

export default FooterBottomView;
