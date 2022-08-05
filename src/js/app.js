import getDescription from './components/getDescription';

const description = document.querySelector('.hero__description-text');

if (document.readyState === 'loading') {
  getDescription('https://baconipsum.com/api/?type=lucky').then((text) => {
    description.textContent = text;
  });
}

window.onload = () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const formAlert = document.querySelector('.form-alert');
  searchForm.reset();

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (searchInput.value.length < 4) {
      formAlert.textContent = 'Минимум 4 символа.';
      return;
    }
  });

  searchInput.addEventListener('input', function () {
    if (/[!@#\$%\^&\*\(\)]/.test(this.value)) {
      formAlert.textContent = 'Недопустимые символы: !@#$%^&*()';
      this.value = this.value.replace(/[!@#\$%\^&\*\(\)]/g, '');
      return;
    }
    formAlert.textContent = '';
  });

  // burger

  let burgerMenu = document.querySelector('.burger-header');
  let menu = document.querySelector('.nav-header__list');

  if (burgerMenu != null) {
    burgerMenu.addEventListener('click', function (e) {
      if (!burgerMenu.classList.contains('active')) {
        burgerMenu.classList.toggle('active');
        menu.classList.toggle('active');
        return;
      } else {
        burgerMenu.classList.toggle('active');
        menu.classList.toggle('active');
      }
    });
  }
};
