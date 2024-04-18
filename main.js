const backdropMenu = document.querySelector(".backdrop-cont");
const openBackdropBtn = document.querySelector(".menu-button");
const closeBackdropBtn = document.querySelector(".backdrop-btn");
const navigationBackdropMenu = document.querySelectorAll(".backdrop-nav-item");

openBackdropBtn.addEventListener("click", () => {
  backdropMenu.classList.remove("in-hidden");
});

closeBackdropBtn.addEventListener("click", () => {
  backdropMenu.classList.add("in-hidden");
});
navigationBackdropMenu.forEach((modalItem) => {
  modalItem.addEventListener("click", () => {
    backdropMenu.classList.add("in-hidden");
  });
});

const orderBtn = document.querySelector(".button");
const modal = document.querySelector(".modal-cont");
const modalCloseBtn = document.querySelector(".modal-button");
const modalForm = document.querySelector(".modal-form");

orderBtn.addEventListener("click", () => {
  modal.classList.remove("is-close");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("is-close");
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.add("is-close");
});
