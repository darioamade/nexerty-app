import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout, signup } from './login';
import { updateUserData } from './updateSettings';

import { slider } from './slider';
import { scrollSection } from './scroll';

//DOM ELEMENTS
const mapBox = document.getElementById('map');
const logginForm = document.querySelector('.form--login');
const logoutBtn = document.getElementById('logoutBtn');
const signinForm = document.querySelector('.form--signup');
const userDataForm = document.querySelector('.form-user-data');

// VALUES
const headerNavMenu = document.querySelector('.header-nav-menu');
const closeNavMenu = document.querySelector('.nav-menu-container-icon');
const NavMenu = document.querySelector('.nav-menu');
const navMenuLogout = document.querySelector('.nav-menu-logout');
const plusFooter = document.querySelector('.plus');
const plusFooter1 = document.querySelector('.plus1');
const plusFooter2 = document.querySelector('.plus2');
const plusFooter3 = document.querySelector('.plus3');
const navFooterLinks = document.querySelector('.nav-footer-links');

const monthOnCalendar = document.querySelector('.month');
const locationCountry  = document.querySelector('.location-country ');




//DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}
if (logginForm)
  logginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logoutBtn) logoutBtn.addEventListener('click', logout);
if (navMenuLogout) navMenuLogout.addEventListener('click', logout);

if (signinForm)
  signinForm.addEventListener('submit', (e) => {
    const name = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name, email, password, passwordConfirm);
  });

if (userDataForm) {
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    updateUserData(name, email);
  });
}
// slider();

if (headerNavMenu) {
  headerNavMenu.addEventListener('click', function () {
    console.log('jafkldhsjv');
    NavMenu.classList.add('nav-menu-active');
  });
}

if (closeNavMenu) {
  closeNavMenu.addEventListener('click', function () {
    NavMenu.classList.remove('nav-menu-active');
  });
}

if (plusFooter) {
  plusFooter
    .closest('.nav-footer-title-top')
    .addEventListener('click', function () {
      document.querySelector('.added').classList.toggle('rotate');
      navFooterLinks.classList.toggle('footerHide1');
    });
}

if (plusFooter1) {
  plusFooter1
    .closest('.nav-footer-title-top')
    .addEventListener('click', function () {
      document.querySelector('.added1').classList.toggle('rotate');
      document.querySelector('.footer1').classList.toggle('footerHide1');
    });
}

if (plusFooter2) {
  plusFooter2
    .closest('.nav-footer-title-top')
    .addEventListener('click', function () {
      document.querySelector('.added2').classList.toggle('rotate');
      document.querySelector('.footer2').classList.toggle('footerHide1');
    });
}
if (plusFooter3) {
  plusFooter3
    .closest('.nav-footer-title-top')
    .addEventListener('click', function () {
      document.querySelector('.added3').classList.toggle('rotate');
      document.querySelector('.footer3').classList.toggle('footerHide1');
    });
}
if (locationCountry){
  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day31MonthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const d = new Date();

  const obj = getDate();
  generateCalendar();

  function getDate() {
    let month = d.getMonth();
    month = monthArr[month];

    let day = d.getDay();
    day = dayArr[day];

    let date = d.getDate();

    locationCountry.innerHTML = date + ', ' + day;
    monthOnCalendar.innerHTML = month;
    return { m: month, dy: day, dt: date, yr: d.getFullYear() };
  }

  function generateCalendar() {
    let days;
    if (obj.m === 'February' && obj.yr % 4 !== 0) {
      days = 20;
    }
    if (obj.m === 'February' && obj.yr % 4 === 0) {
      days = 29;
    }
    if (day31MonthArr.includes(obj.m)) {
      days = 31;
    } else {
      days = 30;
    }

    let LocalDayArr = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    let startOfMonth = moment().clone().startOf('month').format('dddd');

    let dayIndex = LocalDayArr.indexOf(startOfMonth);
    for (let j = 0; j < dayIndex; j++) {
      let element = document.createElement('div');
      element.className = 'calendar__number_empty';
      document.getElementById('lc').appendChild(element);
    }

    for (let k = 1; k <= days; k++) {
      let element = document.createElement('div');
      obj.dt === k
        ? (element.className = 'calendar__number calendar__number--current')
        : (element.className = 'calendar__number  ');

      element.appendChild(document.createTextNode(k));
      document.getElementById('lc').appendChild(element);
    }
  }
}



    function qs(selector, all = false) {
   return all
     ? document.querySelectorAll(selector)
     : document.querySelector(selector);
 }

  const sections = qs('.section', true);
  const timeline = qs('.timeline');

  const line = qs('.line');
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * 0.8;

  function scrollHandler(e) {
    const { scrollY } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

    const dist = targetY - timelineRect.top;
    console.log(dist);

    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
      full = true;
      line.style.bottom = `-50px`;
    }

    sections.forEach((item) => {
      // console.log(item);
      const rect = item.getBoundingClientRect(); //     console.log(rect);

      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add('show-me');
      }
    }); // console.log(up, down);

    prevScrollY = window.scrollY;
  }

  scrollHandler();
  line.style.display = 'block';
  window.addEventListener('scroll', scrollHandler);
