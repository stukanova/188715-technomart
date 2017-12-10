var feedButton = document.querySelector('.button-to-modal');
var buyButton = document.querySelectorAll('.buy');
var closeButtons = document.querySelectorAll('.modal-close');

var feedPopup = document.querySelector('.modal-write-us');
var buyPopup = document.querySelector('.modal-buy');
var allPopups = document.querySelectorAll('.modal');

feedButton.addEventListener('click', function (e) {
  e.preventDefault();
  feedPopup.classList.add('active');
});

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener('click', function (e) {
    e.preventDefault();
    buyPopup.classList.add('active');
  });
}

function popupClose() {
  for (var i = 0; i < allPopups.length; i++) {
    allPopups[i].classList.remove('active');
  }
}

for (var j = 0; j < closeButtons.length; j++) {
  closeButtons[j].addEventListener('click', function () {
    popupClose();
  });
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    for (var i = 0; i < allPopups.length; i++) {
      if (allPopups[i].classList.contains('active')) {
        popupClose();
        break;
      }
    }
  }
});
