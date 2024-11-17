// Toggle class active Hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// Ketika menu diklik
document.querySelector('#menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle Keranjang
const shoppingCart = document.querySelector('.keranjang')

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// klik diluar side bar 
const menu = document.querySelector('#menu');
const sb = document.querySelector('#search-button')
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})