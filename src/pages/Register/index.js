import React, {useState} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import {postUserToApi} from '../../utils/FormHandler';
// import { LoginPage } from '../../assets'

const Register = () => {
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
  
  return (
    <div className="d-flex justify-content-center">
      <div className="row my-5">
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
            <a href="/" className="home-link">Back to home</a>

          </Form>
      </div>
    </div>
  )
}

export default Register
