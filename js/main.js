const pageHeader = document.querySelector('.page-header');
const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const showTariffs = document.querySelector('.add-yourself__business-tariff');
const businessModal = document.querySelector('.business-modal');
const businessModalClose = document.querySelector('.business-modal__close-btn');
const selectCountryToggle = document.querySelectorAll('.select-country__arrow-block');
const selectCountryBlock = document.querySelectorAll('.select-country__head');
const filterCountry = document.querySelector('.filter-country');
const filterCountryToggle = document.querySelector('.filter-country__toggle');
const btnCloseCountryFilter = document.querySelector('.list-countries__btn-close');
const filterTitle = document.querySelectorAll('.filter__title');
const filter = document.querySelectorAll('.filter');
let openedMenu = true;
pageHeader.classList.remove('page-header--no-js');
showsHidesMenu();
mainNavToggle.addEventListener('click', function() {
  document.body.style.overflow = openedMenu ? 'hidden' : '';
  showsHidesMenu();
  openedMenu = !openedMenu;
});
window.onscroll = function() {
  if(window.pageYOffset > mainNav.clientHeight) {
      mainNav.classList.add('main-nav--scrolled');
  } else {
      mainNav.classList.remove('main-nav--scrolled');
  }
};
if(showTariffs) {
    showTariffs.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.body.style.overflow = 'hidden';
    businessModal.style.display = 'block';
  });
  businessModalClose.addEventListener('click', closeTariffs);
  window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      closeTariffs(evt);
    }
  });
}
if(filterCountryToggle || btnCloseCountryFilter) {
  filterCountryToggle.addEventListener('click', closeFilterCountry);
  btnCloseCountryFilter.addEventListener('click', closeFilterCountry);
}
let filterClickHandler = function(toggler, block, className) {
  toggler.addEventListener('click', function() {
    block.classList.toggle(className);
  });
};
if(filter) {
  showsHidesFilters();
  for(let i = 0; i < filter.length; i++) {
    filterClickHandler(filterTitle[i], filter[i], 'filter--closed');
  }
}
if(selectCountryBlock) {
  for(let i = 0; i < selectCountryToggle.length; i++) {
    filterClickHandler(selectCountryToggle[i], selectCountryBlock[i], 'select-country__head--opened');
  }
}
function showsHidesFilters() {
  for(var i = 0; i < filter.length; i++) {
    filter[i].classList.toggle('filter--closed');
  }
}
function showsHidesMenu() {
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
}
function closeTariffs(evt) {
  evt.preventDefault();
  businessModal.style.display = 'none';
  document.body.style.overflow = '';
}
function closeFilterCountry(evt) {
  evt.preventDefault();
  filterCountry.classList.toggle('filter-country--opened');
  filterCountry.classList.toggle('filter-country--closed');
}
