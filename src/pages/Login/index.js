import React, {useState} from 'react'
import { Button, Form, FormGroup, Input, Label} from 'reactstrap'
import { loginUser } from '../../utils/UserHandler';
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

    loginUser(user);
  }

  if (props.user) {
    return window.location.href = '/';
  }

  return (
    <div className="bg-image" style={BackgroundImg}>
      <div className="d-flex justify-content-center">
        <div className="mt-4 bg-light border border-primary rounded p-4 form-card">
          <a href="/" className='text-decoration-none'>
            <h1 className="text-center form-title logo-text text-blue">Scholarship and Course</h1>
          </a>
          <h2 className="text-center mb-4 form-subtitle">Masuk</h2>

            <Form>

              <FormGroup>
                <Label for="username">Username</Label>
                <Input bsSize='sm' id="username" name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <Input bsSize='sm' id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
              </FormGroup>

              <div className="d-grid mt-2 mb-4">
                <Button color="primary" onClick={onSubmit}>Masuk</Button>
              </div>
              <p className='m-0'>Belum punya akun? <a href="/register">Daftar</a></p>

            </Form>
      
        </div>
      </div>
    </div>
  )
}

export default Login
