var link = document.querySelector(".adds-link");
var modal = document.querySelector(".modal");
var modalClose = modal.querySelector(".modal-close");
var form = modal.querySelector(".modal-form");
var login = modal.querySelector("[name=name]");
var email = modal.querySelector("[name=email]");
var storage = localStorage.getItem("login");


link.addEventListener("click", function (evt){
	evt.preventDefault();
	modal.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		email.focus();
	} else {
	login.focus();
	}
})

modalClose.addEventListener("click", function (evt){
	evt.preventDefault();
	modal.classList.remove("modal-show");
})

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
	} else {
		localStorage.setItem("login", login.value)
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (modal.classList.contains("modal-show")) {
			modal.classList.remove("modal-show");
		}
	}
})