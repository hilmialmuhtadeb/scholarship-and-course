import axios from "axios";

const postToApi = (scholarship) => {
  const {title, deadline, poster, description} = scholarship;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('deadline', deadline);
  formData.append('poster', poster);
  formData.append('description', description);

  axios.post('http://localhost:4000/v1/scholarship', formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
}

const updateToApi = (scholarship, id) => {
  const {title, deadline, poster, description} = scholarship;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('deadline', deadline);
  formData.append('poster', poster);
  formData.append('description', description);

  axios.put(`http://localhost:4000/v1/scholarship/${id}`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
  .then((response) => {
    console.log('berhasil update: ', response);
  })
  .catch((error) => {
    console.log(error);
  });
}

export {
  postToApi,
  updateToApi,
};