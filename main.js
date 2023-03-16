const mainTitle = document.querySelectorAll('.drop-down__title');
const subMenu = document.querySelectorAll('.drop-down-submenu');

mainTitle.forEach((mainBlockSub) => {
  mainBlockSub.addEventListener('mouseover', (e) => {
    // Get the class name of the target element
    const className = e.target.classList.value;

    // Hide all submenus
    subMenu.forEach((subMenu) => {
      subMenu.style.display = 'none';
    });

    // Show the corresponding submenu
    switch (className) {
      case 'about':
        document.querySelector('.sub-one').style.display = 'block';
        break;
      case 'activities':
        document.querySelector('.sub-two').style.display = 'block';
        break;
      case 'lakes':
        document.querySelector('.sub-three').style.display = 'block';
        break;
      case 'contacts':
        document.querySelector('.sub-four').style.display = 'block';
        break;
      case 'location':
        document.querySelector('.sub-five').style.display = 'block';
        break;
      default:
        break;
    }
  });
});

subMenu.forEach((subMenu1) => {
  subMenu1.addEventListener('mouseleave', () => {
    subMenu1.style.display = 'none';
  });
});

const burgerBtn = document.querySelector('.btn__burger');
const burgerModal = document.querySelector('.btn__burger-dropList');

burgerBtn.addEventListener('click', () => {
  burgerModal.classList.toggle('active');
});
