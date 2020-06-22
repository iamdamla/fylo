const loadingBarItem = document.querySelector('.gradient');

let width = 1;
let loadingBar = setInterval(function() {
  if(width >= 81) {
    clearInterval(loadingBar);
  } else {
    width++;

    loadingBarItem.style.width = width + "%";
  }
}, 10)