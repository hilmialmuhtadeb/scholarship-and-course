import React from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'

const ScholarshipForm = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="title">
            Judul
          </Label>
          <Input
            id="title"
            name="title"
            placeholder="Masukkan Judul Beasiswa"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="poster">
            Poster
          </Label>
          <Input
            id="poster"
            name="poster"
            type="file"
          />
          <FormText>
            &#8505; Menaambahkan poster dapat membuat mahasiswa lebih tertarik dan informasi mudah dipahami.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="deadline">
            Batas Pengajuan
          </Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">
            Deskripsi
          </Label>
          <textarea className="form-control" name="description" id="description" rows="10"></textarea>
          <FormText>
            &#8505; Jelaskan detail beasiswa yang berisi cakupan, syarat, dan cara mendaftar beasiswa.
          </FormText>
        </FormGroup>
        <div className="d-flex justify-content-end">          
          <Button color="primary" className="px-4">
            Tambah
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default ScholarshipForm
