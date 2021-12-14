import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import axios from 'axios'
import "./addScholarship.css"
import { withRouter } from 'react-router'
import { postScholarshipToApi, updateScholarshipToApi } from '../../utils/FormHandler'

const AddScholarship = (props) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState(null);
  const [poster, setPoster] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      setIsEdit(true);
      axios.get(`http://localhost:4000/v1/scholarship/${id}`)
      .then((response) => {
        const data = response.data.data;
        let deadline = new Date(data.deadline);
        deadline = `${deadline.getFullYear()}-${deadline.getMonth()+1 < 10 ? '0'+ (deadline.getMonth()+1) : deadline.getMonth()+1}-${deadline.getDate() < 10 ? '0'+ deadline.getDate() : deadline.getDate()}`;
        
        setTitle(data.title);
        setDeadline(deadline);
        setImage(`http://localhost:4000/v1/${data.poster}`);
        setDescription(data.description);
      })
      .catch((error) => console.log('error : ', error))
    }
  }, [props]);

  const onPosterUpload = (e) => {
    const file = e.target.files[0];
    setPoster(file);
    setImage(URL.createObjectURL(file));
  }

  const onSubmit = () => {
    const scholarship = {
      title,
      deadline,
      poster,
      description,
      category,
    };
    if (isEdit) {
      const id = props.match.params.id;
      updateScholarshipToApi(scholarship, id);
    } else {
      postScholarshipToApi(scholarship);
    }
  }
  
  return (
    <main className="container my-4">
      <h1>{isEdit ? 'Edit' : 'Tambah'} Informasi Beasiswa</h1>

      <Form>

        <FormGroup>
          <Label for="title">Judul</Label>
          <Input id="title" name="title" type="text" value={isEdit ? title : undefined} onChange={(e) => setTitle(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="category">Kategori</Label>
          <Input id="category" name="category" type="select" onChange={(e) => setCategory(e.target.value)}>
            <option disabled selected>Pilih salah satu kategori!</option>
            <option value="1">Pendidikan</option>
            <option value="2">Kursus</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="poster">Poster</Label>
          {image && <img className="preview d-block mb-3" src={image} alt="preview" />}
          <Input id="poster" name="poster" type="file" onChange={(e) => onPosterUpload(e)} />
          <FormText>&#8505; Menambahkan poster dapat membuat mahasiswa lebih tertarik dan informasi mudah dipahami.</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="deadline">Batas Pengajuan Beasiswa</Label>
          <Input id="deadline" name="deadline" type="date" value={isEdit ? deadline : undefined} onChange={(e) => setDeadline(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="description">Deskripsi</Label>
          <textarea className="form-control" name="description" id="description" rows="10" value={isEdit ? description : undefined} onChange={(e) => setDescription(e.target.value)}></textarea>
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
