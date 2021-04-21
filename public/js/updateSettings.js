// Update Data
import axios from 'axios';
// import { showAlert } from './alerts';

/* export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://localhost:5500/api/v1/users/updateMyPassword'
        : 'http://localhost:5500/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
 */

export const updateUserData = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://localhost:5500/api/v1/users/updateMe',
      data: {
        name,
        email,
      },
    });

    if (res.data.status === 'success') {
      // showAlert('success', 'Data updated successfully!');
      console.log('success', 'Data updated successfully!');
    }
  } catch (err) {
    // showAlert('error', err.response.data.message);
    console.log('error', err.response.data.message);
  }
};

// type is either 'password' or 'data'

/* eslint-disable */
