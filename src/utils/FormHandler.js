import axios from "axios";

const postScholarshipToApi = (scholarship) => {
  const {title, deadline, poster, description, category, user_name, user_id} = scholarship;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('deadline', deadline);
  formData.append('category', category);
  formData.append('poster', poster);
  formData.append('description', description);
  formData.append('user_name', user_name);
  formData.append('user_id', user_id);

  axios.post('http://localhost:4000/v1/scholarships', formData, {
    withCredentials: true,
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
  .then((response) => {
    if (response.status === 201) {
      alert(response.data.message);
      window.location.href = `/scholarships`;
    };
  })
  .catch((error) => {
    console.log(error);
  });
}

const updateScholarshipToApi = (scholarship, id) => {
  const {title, deadline, poster, description, category} = scholarship;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('deadline', deadline);
  formData.append('category', category);
  formData.append('description', description);
  if (poster) {
    formData.append('poster', poster);
  }

  axios.patch(`http://localhost:4000/v1/scholarships/${id}`, formData, {
    withCredentials: true,
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
  .then((response) => {
    if (response.status === 200) {
      alert(response.data.message);
      window.location.href = `/detail-scholarship/${response.data.data._id}`;
    };
  })
  .catch((error) => {
    console.log(error);
  });
}

const postUserToApi = (user) => {
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

const loginUserToApi = (user) => {
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
  postScholarshipToApi,
  updateScholarshipToApi,
  postUserToApi,
  loginUserToApi,
};