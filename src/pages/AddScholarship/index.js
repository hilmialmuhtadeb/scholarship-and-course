import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import axios from 'axios'
import "./addScholarship.css"
import { withRouter } from 'react-router'
import { createScholarship, updateScholarship } from '../../utils/ScholarshipHandler'

const AddScholarship = (props) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState(null);
  const [poster, setPoster] = useState('');
  const [image, setImage] = useState();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      setIsEdit(true);
      axios.get(`http://localhost:4000/v1/scholarships/${id}`)
      .then((response) => {
        const data = response.data.data;
        let deadline = new Date(data.deadline);
        deadline = `${deadline.getFullYear()}-${deadline.getMonth()+1 < 10 ? '0'+ (deadline.getMonth()+1) : deadline.getMonth()+1}-${deadline.getDate() < 10 ? '0'+ deadline.getDate() : deadline.getDate()}`;
        
        setCategory(data.category);
        setTitle(data.title);
        setDeadline(deadline);
        setImage(`http://localhost:4000/v1/${data.poster}`);
        setDescription(data.description);
      })
      .catch((error) => console.log('error : ', error))
    }
  }, [props.match.params.id]);

  const onPosterUpload = (e) => {
    const file = e.target.files[0];
    setPoster(file);
    try {
      setImage(URL.createObjectURL(file));
    } catch (err) {
      console.log(err);
    }
  }

  const onSubmit = () => {
    const scholarship = {
      title,
      deadline,
      poster,
      description,
      category,
      user_name: props.user.name,
      user_id: props.user._id,
    };
    if (isEdit) {
      const id = props.match.params.id;
      updateScholarship(scholarship, id);
    } else {
      createScholarship(scholarship);
    }
  }
  
  return (
    <main className="container my-4">
      <h1>{isEdit ? 'Edit' : 'Tambah'} Informasi Beasiswa</h1>

      <Form>

        <FormGroup>
          <Label for="title">Judul</Label>
          <Input id="title" name="title" type="text" value={isEdit ? title : undefined} onChange={(e) => setTitle(e.target.value)} required />
        </FormGroup>

        <FormGroup>
          <Label for="category">Kategori</Label>
          <Input id="category" name="category" type="select" onChange={(e) => setCategory(e.target.value)} required>
            <option disabled selected>Pilih salah satu kategori!</option>
            <option value="1" selected={category === 1 ? true : false}>Pendidikan</option>
            <option value="2" selected={category === 2 ? true : false}>Kursus</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="poster">Poster</Label>
          {image && <img className="preview d-block mb-3" src={image} alt="preview" />}
          <Input id="poster" name="poster" type="file" onChange={(e) => onPosterUpload(e)} required />
          <FormText>&#8505; Poster yang baik dapat membuat mahasiswa lebih tertarik dan informasi mudah dipahami.</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="deadline">Batas Pengajuan Beasiswa</Label>
          <Input id="deadline" name="deadline" type="date" value={isEdit ? deadline : undefined} onChange={(e) => setDeadline(e.target.value)} required />
        </FormGroup>

        <FormGroup>
          <Label for="description">Deskripsi</Label>
          <textarea className="form-control" name="description" id="description" rows="10" value={isEdit ? description : undefined} onChange={(e) => setDescription(e.target.value)} required></textarea>
          <FormText>&#8505; Jelaskan detail beasiswa yang berisi cakupan, syarat, dan cara mendaftar beasiswa.</FormText>
        </FormGroup>

        <div className="d-flex justify-content-end">          
          <Button color="primary" className="px-4" onClick={onSubmit}>{isEdit ? 'Perbarui' : 'Tambah'}</Button>
        </div>

      </Form>

    </main>
  )
}

export default withRouter(AddScholarship);
