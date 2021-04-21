import '@babel/polyfill';
import axios from 'axios';
import { hideAlert, clearForm, showError, clearForm1 } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:5500/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      // alert('Logged in successfuly');
      clearForm();
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    // console.log(err.response);
    showError('error', 'Error logging in! Try again.');
    window.setTimeout(hideAlert, 1000);
    // alert.log(err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:5500/api/v1/users/logout',
    });
    // if(res.data.status === 'success') location.reload(true)
    if ((res.data.status = 'success')) {
      location.reload();
      location.assign('/');
    }
  } catch (err) {
    showError('error', 'Error logging out! Try again.');
  }
};

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:5500/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      // alert('Logged in successfuly');
      location.reload();
      location.assign('/');
    }
  } catch (err) {
    console.log(err.response);
    showError('error', 'Error sign in! Try again.');
    window.setTimeout(hideAlert, 1000);
    // alert.log(err.response.data.message);
  }
};

/*

import { showAlert } from './alerts';

export const showMyAlert = function () {
  const loginSuccessMsg = document.querySelector('.signin-account-container');
  loginSuccessMsg.textContent = '';
  loginSuccessMsg.style.display = 'flex';
  loginSuccessMsg.style.justifyContent = 'center';
  loginSuccessMsg.style.alignItems = 'center';
  loginSuccessMsg.style.fontSize = '2.5rem';
  loginSuccessMsg.style.fontWeigth = '500';
  loginSuccessMsg.style.color = 'black';
  loginSuccessMsg.style.textAlign = 'center';
  loginSuccessMsg.insertAdjacentText(
    'afterbegin',
    'You were Logged in successfully'
  );
};


// export const showMyAlert1 = function () {
//   const loginSuccessMsg = document.querySelector('.signin-account-container');
//   loginSuccessMsg.textContent = '';
//   loginSuccessMsg.style.display = 'flex';
//   loginSuccessMsg.style.justifyContent = 'center';
//   loginSuccessMsg.style.alignItems = 'center';
//   loginSuccessMsg.style.fontSize = '2.5rem';
//   loginSuccessMsg.style.fontWeigth = '500';
//   loginSuccessMsg.style.color = 'black';
//   loginSuccessMsg.insertAdjacentText(
//     'afterbegin',
//     `Welcome to Rubaccine, ${user.name.split(' ')[0]}`
//   );
// };
export const showMyAlertFail = function () {
  const loginErrorMsg = document.querySelector('.signin-account-container');
  loginErrorMsg.textContent = '';
  loginErrorMsg.style.display = 'flex';
  loginErrorMsg.style.justifyContent = 'center';
  loginErrorMsg.style.alignItems = 'center';
  loginErrorMsg.style.fontSize = '2.5rem';
  loginErrorMsg.style.fontWeigth = '500';
  loginErrorMsg.style.color = 'black';
  loginErrorMsg.insertAdjacentText(
    'afterbegin',
    'Error logging out! Please Try again.'
  );
};

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:5500/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      // showAlert('success', 'Logged in successfully!');
      showMyAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:5500/api/v1/users/logout',
    });
    //if ((res.data.status = 'success')) location.reload(true);
    if ((res.data.status = 'success')) {
      location.reload();
      location.assign('/');
    }
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Please Try again.');
  }
};

export const logoutBtn = document.getElementById('logout-clicked');
if (logoutBtn) logoutBtn.addEventListener('click', logout);
//const logoutBtn = document.getElementById('logout-clicked');

//   const markup = ` <div class="alert alert--${type}">${msg}</div>`;

//  showAlert('success', 'Logged in successfully!');

 */

//May Need IMPORTANT
/* import axios from 'axios';
import '@babel/polyfill';
import {
  login,
  logout,
  showMyAlert,
  showMyAlertFail,
  logoutBtn,
} from './login';

import { updateSettings } from './updateSettings';
import {
  loadSearchResults,
  state,
  controlSearchResults,
  handlerSearch,
} from './loadSearchResults';

import { searchView } from './searchView';
import { bookmark } from './bookmark';
import { signUp } from './signup';
import { buyProduct } from './stripe'; */

/*  Cart Shopping */
/* const bagIconCart = document.querySelector('.bag__icon__cart');
const shopping = document.querySelector('.shopping');
const bagCartClose = document.querySelector('.bag__close__icon');

const btnCartRemoveOne = document.querySelector('.btn-cart-remove');
const btnBagCartQty = document.querySelector('.descrip-title');
const cartItemsBag = document.querySelector('.shopping-container-middle-item');

const cartItemDesc = document.getElementById('cartItemDesc');
const cartItemPrice = document.getElementById('cartItemPrice');
const cartItemSize = document.getElementById('cartItemSize');
const cartItemQuantity = document.getElementById('cartItemQuantity');
const ProductDom = document.querySelector(
  '.showcase-container-gallery-grid-item-img'
); */

// This is where I will be getting Info and place Info

/* const bookmarkHeart = document.querySelector('.icon-page-increase');
const svgHeart = document.querySelector('.icon-close__menu');
bookmarkHeart.addEventListener('click', function (e) {
  //  e.target.classList.replace('icon-close', 'heart');
  // playBtn.classList.replace('fa-pause', 'fa-play');
  console.log('hey');
}); */
// const form1 = document.querySelector('#form1');
// form1.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   login(email, password);
// });

// document
//   .querySelector('.text-main-hidden')
//   .addEventListener('click', loadSearchResults('Knitwear'));

//IMPORTANT
/* const form1 = document.querySelector('#form1');
if (!form1) return;
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
 */
/* const form2 = document.querySelector('.secure-email-field');
form2.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  login(email, password);
 
}); */

// const logoutBtn = document.getElementById('logout-clicked');
// if (logoutBtn) logoutBtn.addEventListener('click', logout);

//IMPORTANT
/* const userDataform = document.getElementById('form-user-data');

if (userDataform)
  userDataform.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('first_name', document.getElementById('first_name').value);
    form.append('last_name', document.getElementById('last_name').value);
    form.append('email', document.getElementById('email').value);
    form.append(
      'email_confirm',
      document.getElementById('email_confirm').value
    );
    form.append('male', document.getElementById('male').value);
    form.append('female', document.getElementById('female').value);
    form.append('country', document.getElementById('country').value);
    form.append('home_tel', document.getElementById('home_tel').value);
    form.append('mobile_tel', document.getElementById('mobile_tel').value);
    updateSettings({ form }, 'data');
    console.log(form);
  });

//NOTE this is update Password which is not working now
if (userDataform)
  userDataform.addEventListener('submit', (e) => {
    e.preventDefault();
    const passwordCurrent = document.getElementById('passwordCurrent').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    updateSettings({ passwordCurrent, password, passwordConfirm }, 'data');
  }); */
/* eslint-disable */

//NOTE All working close not working

/* signin.addEventListener('click', function () {
  signinAccount.classList.add('signin-account-active');
  overlayer2.style.opacity = 1;
  overlayer2.style.visibility = 'visible';
  overlayer2.style.display = 'inline';
});

const signInCloseModal = function () {
  signinClose.addEventListener('click', function () {
    signinAccount.classList.remove('signin-account-active');
    overlayer2.style.opacity = 0;
    overlayer2.style.visibility = 'invisible';
    overlayer2.style.display = 'none';
  });
};
signInCloseModal();

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    signinAccount.classList.remove('signin-account-active');
    overlayer2.style.opacity = 0;
    overlayer2.style.visibility = 'invisible';
    overlayer2.style.display = 'none';
  }
}); */

/********************* Intersection Observer **********************/
// IMPORTANT desactive for now  IMPORTANT
/* const headerTopObserver = document.querySelector(
  '.showcase-container-title-category'
);
const scroolSectionFilter = document.querySelector(
  '.showcase-container-filter'
);
const navHeight = scroolSectionFilter.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) scroolSectionFilter.classList.add('sticky');
  else scroolSectionFilter.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(headerTopObserver); */

/********************* Intersection Observer  END **********************/

// const sliderer = function () {
//   const allSlides = document.querySelectorAll('.slide-overview');
//   const btnLeft = document.querySelector('.slider__btn--left-overview');
//   const btnRight = document.querySelector('.slider__btn--right-overview');

/* 
 const addNewAddress = document.querySelector('#addNewAddress');
const openFormAddress = document.querySelector('.form-address-wrapper');
const closeFormAddress = document.querySelector('.close-x ');

addNewAddress.addEventListener('click', function () {
  openFormAddress.classList.remove('hidden');
  openFormAddress.style.transform = 'scaleX(1, 1)';
});
closeFormAddress.addEventListener('click', function () {
  openFormAddress.classList.add('hidden');
}); */

// search.addEventListener('submit', function (e) {
//   e.preventDefault();
//   handlerSearch(controlSearchResults);
// });

/* 
const getQuery = document.querySelector('.search-overlay-content__field').value;
handlerSearch = () => {
  search.addEventListener('submit', function (e) {
    e.preventDefault();
    // controlSearchResults()
  });
};

handlerSearch(controlSearchResults); */

// const getQuery = document.querySelector('.search-overlay-content__field').value;
//NOTE CREATE NEW USER
/*    const formCreate = document.querySelector('#formCreate')
 formCreate.addEventListener('submit', (e) => {
   if (!formCreate ) return;
   e.preventDefault();
   const name = document.getElementById('name').value;
   // const lastName = document.getElementById('last_name').value;
   const email = document.getElementById('create_email').value;
   // const emailConfirm = document.getElementById('create_email*').value;
   const password = document.getElementById('create_password').value;
   const passwordConfirm = document.getElementById('create_password*').value;
   // const name = `${firtsName} + ${lastName}`;
   signUp(name, email, password, passwordConfirm);
   console.log(name, email, password, passwordConfirm);
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
 });    */

/*  OPEN product details */
