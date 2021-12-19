import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from "axios";

const createScholarship = (scholarship) => {
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

const updateScholarship = (scholarship, id) => {
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

const deleteScholarship = (scholarship) => {
  confirmAlert({
    title: 'Hapus Informasi Beasiswa?',
    message: 'Informasi beasiswa akan dihapus secara permanen.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
          axios.delete(`http://localhost:4000/v1/scholarships/${scholarship._id}`, {
            withCredentials: true,
          })
          .then((response) => {
            if (response.status === 200) {
              alert(response.data.message);
              window.location.href = '/scholarships';
            }
          })
          .catch((error) => {
            console.log(error);
          })
        }
      },
      {
        label: 'No',
        onClick: () => {
          console.log('batal menghapus beasiswa');
        }
      }
    ]
  });
}

const getDetailScholarship = async (id, setScholarship) => {
  const response =  await axios.get(`http://localhost:4000/v1/scholarships/${id}`);
  return response.data.data;
}

const getAllScholarship = async (category, counter) => {
  const response = await axios.get(`http://localhost:4000/v1/scholarships?category=${category}&page=${counter}&perPage=3`);
  return response.data;
}

export {
  createScholarship,
  updateScholarship,
  deleteScholarship,
  getDetailScholarship,
  getAllScholarship,
};