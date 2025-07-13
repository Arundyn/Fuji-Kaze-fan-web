// contact modal goes brrr
var btnSubmit = document.querySelector(".submit");
console.log(btnSubmit);
var modal = document.querySelector(".modal-container");
console.log(modal);

if (btnSubmit) {
btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
    const next = document.querySelector(".next");
    // console.log(next);
    next.setAttribute(
    "value",
    "https://fuji-kazeweb.netlify.app/contact.html"
    );
});
}

// var btnCloseModal = document.querySelector(".close-modal");
// if (modal) {
//   btnCloseModal.addEventListener("click", function () {
//     modal.classList.remove("show");
//   });
// }