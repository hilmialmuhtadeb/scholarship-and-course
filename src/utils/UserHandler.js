import axios from "axios";

const registerUser = (user) => {
  const { name, username, password } = user;
  const formData = new FormData();
  formData.append('name', name);
  formData.append('username', username);
  formData.append('password', password);

  axios.post('http://localhost:4000/v1/auth/register', formData)
    .then((response) => {
      if (response.status === 201) {
        alert(response.data.message);
        window.location.href = `/login`;
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}

const loginUser = (user) => {
  const { username, password } = user;
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  axios.post('http://localhost:4000/v1/auth/login', formData, {
    withCredentials: true,
  })
    .then((response) => {
      alert('Berhasil login!');
      return window.location.href = '/';
    })
    .catch((error) => {
      alert(error.message);
    });
}

export {
  registerUser,
  loginUser,
};