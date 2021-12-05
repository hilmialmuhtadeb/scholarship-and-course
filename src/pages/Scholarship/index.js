import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { ScholarshipCard } from '../../components'

const Scholarship = () => {
  const [dataScholarship, setDataScholarship] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/v1/scholarships')
      .then((response) => response.json())
      .then((responseJson) => {
        setDataScholarship(responseJson.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <main className="container my-5">
      <div className="d-flex justify-content-end mb-4">
        <a href="/add-scholarship" className="btn btn-primary">
          Tambah Informasi Beasiswa
        </a>
      </div>
      <div className="row">
        {dataScholarship.map((scholarship) => {
          return (
            <div className="col-md-4">
              <ScholarshipCard 
                key={scholarship._id}
                title={scholarship.title}
                deadline={scholarship.deadline}
                poster={`http://localhost:4000/v1/${scholarship.poster}`}
                description={scholarship.description}
                name={scholarship.author.name}
              />
            </div>
          )
        })}
      </div>
      <div className="d-flex justify-content-center">
        <Button className="mx-2" color="warning">&#10094;</Button>
        <Button className="mx-2" color="warning">&#10095;</Button>
      </div>
    </main>
  )
}

export default Scholarship
