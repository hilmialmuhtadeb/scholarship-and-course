import React from 'react'
import { Button } from 'reactstrap';
import { PhotoWinda, PhotoHilmi, Logo1} from '../../assets'
import "./about.css"


const About = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className="row justify-content-between p-2">
          <div className="col-sm-7 pe-3 d-flex flex-column justify-content-center">
            <h3 className='fw-bold title'>Tentang Kami</h3>
            <p className='text-secondary'>Scholarship and Course merupakan platform berbasis website sebagai media untuk mendapatkan informasi atau membagikan informasi beasiswa pendidikan dan kursus. <a href="/">Create your future easily!</a></p>
          </div>
          <div className="col-sm-5">
                <img className='img-fluid' src={Logo1} alt="logo1 snc" />
          </div>
        </div>
      </div>
      <div className="mt-5 py-4 tim">
        <h3 className='fw-bold mb-4 subtitle text-center'>Tim Kami</h3>
        <div className="d-grid flex-row justify-content-center p-4">
        <div className="d-flex flex-column p-4 align-items-center border rounded-3 mb-3 bg-light">
          <div className="d-flex p-2 border rounded-circle align-items-center justify-content-center photos">
            <img className='rounded-circle photos-img' src={PhotoHilmi} alt="Foto Hilmi"/>
          </div>
          <h5>Hilmi Almuhtade Billah</h5>
          <div className="d-flex flex-row align-items-center mb-4 labels">
            <span>Leader</span>
            <span>Web Developer</span>
          </div>
          <p className='text-center'>Halo saya hilmi mahasiswa semester 5 Universitas Negeri Surabaya</p>
          <div className="d-flex flex-column align-items-start w-100 mt-4">
            <div className="summary">
              <label className='text-left'>WhatsApp</label>
              <span className='text-left mb-3'>089601628845</span>
            </div>
            <div className="summary">
              <label className='text-left'>Alamat</label>
              <span className='text-left'>Surabaya, Jawa Timur</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center">
          <a href="https://github.com/hilmialmuhtadeb" target="blank">
            <Button className="bg-primary border rounded m-3 know-more">Know More</Button>
          </a>
          </div>
        </div>

        <div className="d-flex flex-column p-4 align-items-center border rounded-3 mb-3 bg-light">
          <div className=" d-flex p-2 border rounded-circle align-items-center justify-content-center photos">
            <img className='rounded-circle photos-img' src={PhotoWinda} alt="Foto Winda"/>
          </div>
          <h5>Ni Wayan Windayani</h5>
          <div className="d-flex flex-row align-items-center mb-4 labels">
            <span>Leader Too</span>
            <span>Web Developer</span>
          </div>
          <p className='text-center'>Halo saya Winda mahasiswa semester 5 Universitas Udayana</p>
          <div className="d-flex flex-column align-items-start w-100 mt-4">
            <div className="summary">
              <label className='text-left'>WhatsApp</label>
              <span className='text-left mb-3'>087865463510</span>
            </div>
            <div className="summary">
              <label className='text-left'>Alamat</label>
              <span className='text-left'>Badung, Bali</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <a href="https://www.linkedin.com/in/ni-wayan-windayani-a6614b159/" target="blank">
              <Button className="bg-primary border rounded m-3 know-more">Know More</Button>
            </a>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default About
