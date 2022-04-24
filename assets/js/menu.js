let menuButton = document.querySelector('.header__menu-button');
let upgrade = document.querySelector('.header__upgrade-button');
let textUpgrade = upgrade.querySelector('p');

menuButton.onclick = () => {
  let items = document.querySelector('.header__items');
  items.classList.toggle('hidden');

  if (!items.classList.contains('hidden')) {
    menuButton.style.transition = 'all .2s ease-in-out';
    menuButton.style.transform = 'rotate(90deg)';
  } else {
    menuButton.style.transition = 'all .2s ease-in-out';
    menuButton.style.transform = '';
  }
};

upgrade.onmouseover = () => {
  textUpgrade.style.transition = 'color .2s ease';
  textUpgrade.style.color = 'rgb(255, 255, 255)';

  upgrade.style.transition = 'all .2s ease';
  upgrade.style.background = 'rgb(0, 0, 0)';
  upgrade.style.opacity = 0.9;
};

upgrade.onmouseout = () => {
  textUpgrade.style.transition = 'color .2s ease';
  textUpgrade.style.color = 'rgb(0, 0, 0)';

  upgrade.style.transition = 'all .4s ease';
  upgrade.style.background = 'rgb(255, 255, 255)';
  upgrade.style.opacity = 0.2;
};


