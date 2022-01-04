const buyBtns = document.querySelectorAll(".js-buy-tickets");
const close = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector('.js-modal-container')
const modal = document.querySelector(".js-modal");

function showBuyTickets() {
  modal.classList.add("open");
}

function closeBuyTickets() {
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}

close.addEventListener("click", closeBuyTickets);

modal.addEventListener("click", closeBuyTickets);

modalContainer.addEventListener('click', function (event) {
  event.stopPropagation()
})
