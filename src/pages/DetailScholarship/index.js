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
            console.log(scholarship.id);
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
  
  useEffect(() => {
    const id = props.match.params.id;
    const fetchData = async () => {
      let response = await fetch(`http://localhost:4000/v1/scholarships/${id}`);
      response = await response.json();
      setScholarship(response.data);
    }

    fetchData();
  }, [props]);
  
  if (scholarship) {
    return (
      <main className="container my-4">
  
        <div className="row justify-content-center">

          <div className="col-md-6 text-center">
            <img src={`http://localhost:4000/v1/${scholarship.poster}`} alt="Poster Beasiswa" className="poster-image" />
          </div>

          <div className="col-md-6">
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/scholarships">
                  Beasiswa
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {scholarship.title}
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="scholarship__title my-2">{scholarship.title}</h1>
            <p className="text-secondary">Batas Pengajuan : {`${deadline.getDate()} ${months[deadline.getMonth()]} ${deadline.getFullYear()}`}</p>
            <p className="text-opacity-50 text-start">
                {scholarship.description}
            </p>
            <p className="text-start text-secondary">Ditulis oleh {scholarship.author.name}</p>
            <div className="d-flex align-items-center">
              <a href={`/add-scholarship/${scholarship._id}`} className="me-3">Edit</a> | 
              <Button color="danger" className="ms-3" onClick={confirmDelete}>Hapus</Button>
            </div>
          </div>

        </div>
  
      </main>
    )
  } else {
    return <p className="loading-text">Loading ....</p>
  }
}

export default withRouter(DetailScholarship)
