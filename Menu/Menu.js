// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  const isOpen = menu.classList.contains('menu--open');
  if(!isOpen) {
    TweenMax.to(menu, 0.5, { x: 0 });
    menu.classList.add('menu--open');
  } else {
    setTimeout((() => menu.classList.remove('menu--open')), 500);
    TweenMax.to(menu, 0.5, { x: -500 });
  }
};
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
TweenMax.to(menu, 0, { x: -500 });