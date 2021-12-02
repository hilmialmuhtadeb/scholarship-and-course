import React from 'react'
import { Button } from 'reactstrap'
import { ScholarshipCard } from '../../components'

const Scholarship = () => {
  return (
    <main className="container my-5">
      <div className="d-flex justify-content-end mb-4">
        <a href="/add-scholarship" className="btn btn-primary">
          Tambah Informasi Beasiswa
        </a>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ScholarshipCard />
        </div>
        <div className="col-md-4">
          <ScholarshipCard />
        </div>
        <div className="col-md-4">
          <ScholarshipCard />
        </div>
        <div className="col-md-4">
          <ScholarshipCard />
        </div>
        <div className="col-md-4">
          <ScholarshipCard />
        </div>
        <div className="col-md-4">
          <ScholarshipCard />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button className="mx-2" color="warning">&#10094;</Button>
        <Button className="mx-2" color="warning">&#10095;</Button>
      </div>
    </main>
  )
}

export default Scholarship
