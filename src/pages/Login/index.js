import React, {useState} from 'react'
import { Button, Form, FormGroup, Input, Label} from 'reactstrap'
import { loginUserToApi } from '../../utils/FormHandler';
import { ScholarshipImage } from '../../assets'
import "./login.css"


const BackgroundImg = {
  backgroundImage: 'url('+ ScholarshipImage +')'
}

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const user = {
      username,
      password,
    };

    loginUserToApi(user);
  }

  if (props.user) {
    return window.location.href = '/';
  }

  return (
    <div className="bg-image" style={BackgroundImg}>
      <div className="d-flex justify-content-center p-6">
        <div className="row my-5 bg-light border border-primary rounded p-4">
            <h1 className="text-center mb-4">Masuk</h1>

            <Form>

              <FormGroup>
                <Label for="username">Username</Label>
                <Input id="username" name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
              </FormGroup>

              <div className="d-grid mt-2 mb-4">
                <Button color="primary" onClick={onSubmit}>Masuk</Button>
              </div>
              <p className='m-0'>Belum punya akun? <a href="/register">Daftar</a></p>
              <a href="/">Kembali ke home</a>

            </Form>
      
        </div>
      </div>
    </div>
  )
}

export default Login
