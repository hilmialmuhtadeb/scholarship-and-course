import React, { useState } from 'react'
// import { ScholarshipForm } from '../../components'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import "./addScholarship.css"

const AddScholarship = () => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState(null);
  const [poster, setPoster] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const onPosterUpload = (e) => {
    const file = e.target.files[0];
    setPoster(file);
    setImage(URL.createObjectURL(file));
  }

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('deadline', deadline);
    formData.append('poster', poster);
    formData.append('description', description);

    fetch('http://localhost:4000/v1/scholarship', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <main className="container my-4">
      <h1>Tambah Informasi Beasiswa</h1>

      <Form>

        <FormGroup>
          <Label for="title">Judul</Label>
          <Input id="title" name="title" type="text" onChange={(e) => setTitle(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="poster">Poster</Label>
          {image && <img className="preview d-block mb-3" src={image} alt="preview" />}
          <Input id="poster" name="poster" type="file" onChange={(e) => onPosterUpload(e)} />
          <FormText>&#8505; Menaambahkan poster dapat membuat mahasiswa lebih tertarik dan informasi mudah dipahami.</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="deadline">Batas Pengajuan</Label>
          <Input id="deadline" name="deadline" type="date" onChange={(e) => setDeadline(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="description">Deskripsi</Label>
          <textarea className="form-control" name="description" id="description" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
          <FormText>&#8505; Jelaskan detail beasiswa yang berisi cakupan, syarat, dan cara mendaftar beasiswa.</FormText>
        </FormGroup>

        <div className="d-flex justify-content-end">          
          <Button color="primary" className="px-4" onClick={onSubmit}>Tambah</Button>
        </div>

      </Form>

    </main>
  )
}

export default AddScholarship
