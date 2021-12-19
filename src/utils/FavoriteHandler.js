import axios from 'axios';

const addScholarshipToFavorite = (user, scholarship) => {
  axios.post('http://localhost:4000/v1/favorites', {
    username: user.username,
    scholarshipId: scholarship._id,
  });
}

const removeScholarshipFromFavorite = (user, scholarship) => {
    const username = user.username;
    const scholarshipId = scholarship._id;
    axios.delete(`http://localhost:4000/v1/favorites?username=${username}&scholarshipId=${scholarshipId}`);
}

const isFavoritedScholarship = async (user, scholarship, setIsFavorited) => {
  let response = await axios.get(`http://localhost:4000/v1/favorites?username=${user.username}&scholarshipId=${scholarship._id}`);
  if (response.data.favorite !== null) {
    setIsFavorited(true);
  } else {
    setIsFavorited(false);
  }
}

export {
  addScholarshipToFavorite,
  removeScholarshipFromFavorite,
  isFavoritedScholarship,
};