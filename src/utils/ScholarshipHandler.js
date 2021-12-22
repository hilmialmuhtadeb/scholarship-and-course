import axios from "axios";
import swal from 'sweetalert';

const _checkScholarshipForm = (scholarship) => {
  const {title, deadline, poster, description, category} = scholarship;

  if (!title || !deadline || !poster || !description || !category ) {
    return swal({
      title: "Gagal!",
      text: "Semua kolom wajib diisi.",
      icon: "error",
      button: "Ok",
    });
  }
}

const createScholarship = (scholarship) => {
  _checkScholarshipForm(scholarship);
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
      swal({
        title: "Berhasil!",
        text: `${response.data.message}`,
        icon: "success",
        button: "Ok",
      })
        .then((result) => {
          if (category === 1) {
            window.location.href = `/scholarships`;
          } else {
            window.location.href = `/courses`;
          }
        });
    };
  })
  .catch((error) => {
    swal({
      title: "Gagal!",
      text: `${error.response.data.message}`,
      icon: "error",
      button: "Ok",
    });
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

  _checkScholarshipForm(scholarship);
  
  axios.patch(`http://localhost:4000/v1/scholarships/${id}`, formData, {
    withCredentials: true,
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
  .then((response) => {
    if (response.status === 200) {
      swal({
        title: "Berhasil!",
        text: `${response.data.message}`,
        icon: "success",
        button: "Ok",
      })
        .then((result) => {
          if (category === 1) {
            window.location.href = `/scholarships`;
          } else {
            window.location.href = `/courses`;
          }
        });
    };
  })
  .catch((error) => {
    swal({
      title: "Gagal!",
      text: "Semua kolom wajib diisi.",
      icon: "error",
      button: "Ok",
    });
  });
}

const deleteScholarship = (scholarship) => {
  swal({
    title: "Hapus Informasi Beasiswa?",
    text: "Informasi beasiswa akan dihapus permanen?",
    icon: "warning",
    buttons: ["Batal", "Ok"],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      axios.delete(`http://localhost:4000/v1/scholarships/${scholarship._id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          swal("Berhasil dihapus!", {
            icon: "success",
          }).then((res) => {
            if (scholarship.category === 1) {
              window.location.href = `/scholarships`;
            } else {
              window.location.href = `/courses`;
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }
  });
}

const getDetailScholarship = async (id, setScholarship) => {
  const response =  await axios.get(`http://localhost:4000/v1/scholarships/${id}`);
  return response.data.data;
}

const getAllScholarship = async (category, counter) => {
  const response = await axios.get(`http://localhost:4000/v1/scholarships?category=${category}&page=${counter}&perPage=9`);
  return response.data;
}

export {
  createScholarship,
  updateScholarship,
  deleteScholarship,
  getDetailScholarship,
  getAllScholarship,
};