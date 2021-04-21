/* import '@babel/polyfill';
import axios from 'axios';
import { hideAlert, clearForm, showError } from './alerts'; */
/*  const signUp = async (name, email, password, passwordConfirm) => {
  console.log(name, email, password, passwordConfirm);
  try {
    const res = await axios({
      method: 'POST',
      url: `http://localhost:5500/api/v1/users/signup`,
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

document.querySelector('#formCreate').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('passwordConfirm').value;
  signUp(firstName, email, password, passwordConfirm);
}); */

/* export const signUp = async (name, email, password, passwordConfirm) => {
  console.log(name, email, password, passwordConfirm);

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


      if (res.data.status == 'success') {
        // alert('Logged in successfuly');
        window.setTimeout(() => {
          location.assign('/');
        }, 1500);
      }
      // alert('Logged in successfuly');
    //   console.log('logged in');
    //   clearForm();
    //   window.setTimeout(() => {
    //     location.assign('/');
    //   }, 5000);
    //    location.assign('/');
    // }
  } catch (err) {
    // showError('error', err.response.data.message);
     showError('error', 'Error signup out! Try again.');
  }
};
 */