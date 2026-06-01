document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.navbar-burger');
  if (!burger) {
    return;
  }
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    var menu = document.querySelector('.navbar-menu');
    if (menu) {
      menu.classList.toggle('is-active');
    }
  });
});
