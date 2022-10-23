import AbstractView from '../AbstractView';

function createModal() {
  return (
    `<div class="modal-view">
      <button class="modal-view__close">
        <img src="./images/close.svg" alt="close" />
      </button>
      <h2 class="modal-view__title">SEND US MESSAGE</h2>

      <form name="form" class="modal-view__form">
        <label class="modal-view__label">Full Name</label>
        <input name="fullName" class="modal-view__input" placeholder="Your Name">

        <label class="modal-view__label">Email</label>
        <input name="email" class="modal-view__input" placeholder="Your Email">

        <label class="modal-view__label">Message</label>
        <textarea name="message" class="modal-view__textarea" placeholder="Your Message"></textarea>

        <button name="submit" class="button-view">SUBMIT</button>
      </form>
    </div>`
  );
}

class ModalView extends AbstractView {
  get template() {
    return createModal();
  }
}

export default ModalView;
