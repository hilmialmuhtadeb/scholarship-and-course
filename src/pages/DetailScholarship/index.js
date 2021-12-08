import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { useState } from 'react/cjs/react.development'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import "./detailScholarship.css"

const DetailScholarship = (props) => {
  const [scholarship, setScholarship] = useState();
  let deadline;

  if (scholarship) {
    deadline = new Date(scholarship.deadline);
  }

  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
  useEffect(() => {
    const id = props.match.params.id;
    const fetchData = async () => {
      let response = await fetch(`http://localhost:4000/v1/scholarship/${id}`);
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
          </div>

        </div>
  
      </main>
    )
  } else {
    return <p className="loading-text">Loading ....</p>
  }
}

export default withRouter(DetailScholarship)
