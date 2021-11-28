import React from 'react'
import { ScholarshipForm } from '../../components'
import "./addScholarship.css"

const AddScholarship = () => {
  return (
    <main className="container my-4">
      <h1>Tambah Informasi Beasiswa</h1>
      <ScholarshipForm />
    </main>
  )
}

export default AddScholarship
