const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

//Hàm hiển thị modal ( thêm class open vào modal)
function showModal() {
  modal.classList.add("open");
}
//Hàm ẩn modal ( gỡ bỏ class open vào modal)
function hideModal() {
  modal.classList.remove("open");
}
//Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showModal);
}
//Nghe hành vi click vào button close
modalClose.addEventListener("click", hideModal);
//Nghe hành vi click vào modal sẽ ẩn
modal.addEventListener("click", hideModal);
//Ngăn chăn nổi bọt của hành vi ẩn
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
