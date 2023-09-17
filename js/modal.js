(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("backdrop")) {
      refs.modal.classList.toggle("is-hidden");
      refs.body.style.overflow = "auto";
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.style.overflow = "hidden";
  }
})();