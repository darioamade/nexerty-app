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
      // res.redirect('/')
    }
  } catch (err) {
    console.log(err.response);
    showError('error', 'Error sign in! Try again.');
    window.setTimeout(hideAlert, 1000);
    // alert.log(err.response.data.message);
  }
};

