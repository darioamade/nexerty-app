const formLoginContent = document.querySelector('.form--login');
const textWelcome = document.querySelector('.textWelcome');
const please = document.querySelector('.please');

export const hideAlert = function () {
  textWelcome.textContent = ' Please try again!';
   textWelcome.style.color = 'black';
};

export const clearForm = function () {
  formLoginContent.textContent = ' ';
  formLoginContent.innerHTML = '<p class="logged">Logged in successfully!</p>';
  textWelcome.textContent = ' ';
};
export const clearForm1 = function () {
  formLoginContent.textContent = ' ';
  please.textContent= ' '
  formLoginContent.innerHTML = '<p class="logged">Sign up  successfully!</p>';
  textWelcome.textContent = ' ';
};


export const showError = function () {
  textWelcome.style.color= 'red'
  textWelcome.textContent = 'Error logging out! Try again.';
};




/* // Type is 'success' or ' error'
//MOVE Up --> parentElement
export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

//Type is 'success' or 'error'

export const showAlert = (type, msg) => {
  hideAlert();
  const markup = ` <div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, 5000);
};

 */