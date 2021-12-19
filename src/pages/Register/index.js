import React, {useState} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import {postUserToApi} from '../../utils/FormHandler';
import { ScholarshipImage } from '../../assets'
import "./register.css"

const BackgroundImg = {
  backgroundImage: 'url('+ ScholarshipImage +')'
}

const Register = (props) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const user = {
      name,
      username,
      password,
    };

    postUserToApi(user);
  }

  if (props.user) {
    return window.location.href = '/';
  }
  
  return (
    <div className="bg-image" style={BackgroundImg}>
      <div className="d-flex justify-content-center p-4">
        <div className="row my-5 bg-light border border-primary rounded p-4">
            <h1 className="text-center mb-4">Buat Akun</h1>

            <Form>

              <FormGroup>
                <Label for="name">Nama Lengkap</Label>
                <Input id="name" name="name" type="text" onChange={(e) => setName(e.target.value)} />
              </FormGroup>

              <FormGroup>
                <Label for="username">Username</Label>
                <Input id="username" name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
              </FormGroup>

              <div className="d-grid mt-2 mb-4">
                <Button color="primary" onClick={onSubmit}>Daftar</Button>
              </div>
              <p className='m-0'>Sudah punya akun? <a href="/login">Masuk</a></p>
              <a href="/" className="home-link">Kembali ke home</a>

            </Form>
        </div>
      </div>
    </div>
  )
}

export default Register
