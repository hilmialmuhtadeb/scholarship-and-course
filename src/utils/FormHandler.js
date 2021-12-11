import axios from "axios";

const postToApi = (scholarship) => {
  const {title, deadline, poster, description, category} = scholarship;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('deadline', deadline);
  formData.append('category', category);
  formData.append('poster', poster);
  formData.append('description', description);

  axios.post('http://localhost:4000/v1/scholarship', formData, {
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

const updateToApi = (scholarship, id) => {
  const {title, deadline, poster, description, category} = scholarship;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('deadline', deadline);
  formData.append('category', category);
  formData.append('description', description);
  if (poster) {
    formData.append('poster', poster);
  }

  axios.patch(`http://localhost:4000/v1/scholarship/${id}`, formData, {
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

export {
  postToApi,
  updateToApi,
};