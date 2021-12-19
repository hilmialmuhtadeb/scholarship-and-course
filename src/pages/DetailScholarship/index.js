import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { useState } from 'react/cjs/react.development'
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./detailScholarship.css"
import axios from 'axios';

const DetailScholarship = (props) => {
  const [scholarship, setScholarship] = useState();
  const [isFavorited, setIsFavorited] = useState(false);
  
  let deadline;
  if (scholarship) {
    deadline = new Date(scholarship.deadline);
  }

  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const confirmDelete = () => {
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

  const addToFavorite = () => {
    axios.post('http://localhost:4000/v1/favorites', {
      username: props.user.username,
      scholarshipId: scholarship._id,
    });
  }

  const removeFromFavorite = () => {
      const username = props.user.username;
      const scholarshipId = scholarship._id;
      axios.delete(`http://localhost:4000/v1/favorites?username=${username}&scholarshipId=${scholarshipId}`);
  }
  
  useEffect(() => {
    const id = props.match.params.id;
    const fetchData = async () => {
      let response = await fetch(`http://localhost:4000/v1/scholarships/${id}`);
      response = await response.json();
      setScholarship(response.data);
    }

    const fetchFavorite = async (username) => {
      let response = await fetch(`http://localhost:4000/v1/favorites?username=${username}&scholarshipId=${id}`);
      response = await response.json();
      if (response.favorite !== null) {
        setIsFavorited(true);
      } else {
        setIsFavorited(false);
      }
    }

    if (props.user) {
      const username = props.user.username;
      fetchFavorite(username);
    }
    
    fetchData();
  }, [props]);
  
  if (scholarship) {

    let breadcrumb;
    if(scholarship.category === 1) {
      breadcrumb = (
        <a href="/scholarships">
          Pendidikan
        </a>
      );
    } else {
      breadcrumb = (
        <a href="/courses">
          Kursus
        </a>
      )
    }


    let favoriteButton;
    if (props.user) {
      if (!isFavorited) {
        favoriteButton = (
          <Button color='primary' className='my-4' outline block onClick={addToFavorite}>Tambahkan ke Favorit</Button>
        );
      } else {
        favoriteButton = (
          <Button color='danger' className='my-4' outline block onClick={removeFromFavorite}>Hapus dari Favorit</Button>
        );
      }
    } else {
      favoriteButton = (
        <a href="/login" className="text-decoration-none">
          <Button color='primary' className='my-4' block>Masuk dan Tambahkan ke Favorit</Button>
        </a>
      );
    }
    
    let actionMenu;
    if (props.user) {
      if (props.user._id === scholarship.author.user_id) {
        actionMenu = (
          <div className="d-flex align-items-center">
            <a href={`/add-scholarship/${scholarship._id}`} className="me-3">Edit</a> | 
            <Button color="danger" className="ms-3" onClick={confirmDelete}>Hapus</Button>
          </div>
        );
      }
    }

    return (
      <main className="container my-4">
  
        <div className="row justify-content-center">

          <div className="col-md-6 text-center">
            <img src={`http://localhost:4000/v1/${scholarship.poster}`} alt="Poster Beasiswa" className="poster-image" />
          </div>

          <div className="col-md-6">
            <Breadcrumb>
              <BreadcrumbItem>
                {breadcrumb}
              </BreadcrumbItem>
              <BreadcrumbItem className='scholarship__breadcrumb' active>
                {scholarship.title}
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="scholarship__title my-2">{scholarship.title}</h1>
            <p className="text-secondary">Batas Pengajuan : {`${deadline.getDate()} ${months[deadline.getMonth()]} ${deadline.getFullYear()}`}</p>
            <p className="text-opacity-50 text-start scholarship__description">
                {scholarship.description}
            </p>
            <p className="text-start text-secondary">Ditulis oleh {scholarship.author.name}</p>
            
            { favoriteButton }

            { actionMenu }

          </div>

        </div>
  
      </main>
    )
  } else {
    return <p className="loading-text">Loading ....</p>
  }
}

export default withRouter(DetailScholarship)
