let modal = document.getElementById("modal");
let chatButton = document.getElementById("chat-button");
let closeModalButton = document.getElementById("close-modal-button");
var modalOpened = false;

chatButton.onclick = function () {
  modalHandler();
};
closeModalButton.onclick = function () {
  modalHandler();
};

const modalHandler = () => {
  if (modalOpened) {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    modalOpened = false;
    return;
  } else {
    modalOpened = true;
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
  }
};
