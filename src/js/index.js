const btnModal = document.querySelectorAll('[data-modal]');
const btnModalClose = document.querySelector('[data-modal-close]');
const btnModalStep = document.querySelector('[data-modal-step]');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

btnModal.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.add('modal--active');
  });
});

btnModalClose.addEventListener('click', () => {
  modal.classList.remove('modal--active');
});

btnModalStep.addEventListener('click', () => {
  if (modalContent.classList.contains('modal__step--1')) {
    modalContent.classList.add('modal__step--2');
    modalContent.classList.remove('modal__step--1');
    return;
  }
  if (modalContent.classList.contains('modal__step--2')) {
    modalContent.classList.add('modal__step--3');
    modalContent.classList.remove('modal__step--2');
  }
});
