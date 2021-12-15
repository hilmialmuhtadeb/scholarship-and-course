import React from 'react'
import { IconWhatsapp, IconEmail, IconFacebook, IconInstagram, PhotoWinda, PhotoHilmi} from '../../assets'
import "./about.css"

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-us text-center">
          <h3>Tentang Kami</h3>
          <p>Scholarship and Course merupakan platform berbasis website sebagai media untuk mendapatkan informasi atau membagikan informasi beasiswa pendidikan dan kursus. <a href="/">Create your future easily!</a></p>
        </div>
        <div className="follow-us">
          <h4>Ikuti Kami</h4>
          <a href="/"><img src={IconWhatsapp} alt="WhatsApp"/></a>
          <a href="/"><img src={IconEmail} alt="Email"/></a>
          <a href="/"><img src={IconFacebook} alt="Facebook"/></a>
          <a href="/"><img src={IconInstagram} alt="Instagram"/></a>
        </div>
      </div>
      <div className="our-team text-center">
        <h3>Tim Kami</h3>
        <div className="our-team__item">
        <div className="leader">
          <div className="photos">
            <img src={PhotoHilmi} alt="Foto Hilmi"/>
          </div>
          <h5>Hilmi Almuhtade Billah</h5>
          <div className="labels">
            <span>Leader</span>
            <span>Web Developer</span>
          </div>
          <p>Halo saya hilmi mahasiswa semester 5 Universitas Negeri Surabaya</p>
          <div className="summaries">
            <div className="summary">
              <label>WhatsApp</label>
              <span>087865463510</span>
            </div>
            <div className="summary">
              <label>Alamat</label>
              <span>Surabaya, Jawa Timur</span>
            </div>
          </div>
          <div className="more">
          <a href="https://github.com/hilmialmuhtadeb" target="blank"><button className="know-more">Know More</button></a>
          </div>
        </div>

        <div className="vice-leader">
          <div className="photos">
            <img src={PhotoWinda} alt="Foto Winda"/>
          </div>
          <h5>Ni Wayan Windayani</h5>
          <div className="labels">
            <span>Vice Leader</span>
            <span>Web Developer</span>
          </div>
          <p>Halo saya hilmi mahasiswa semester 5 Universitas Udayana</p>
          <div className="summaries">
            <div className="summary">
              <label>WhatsApp</label>
              <span>087865463510</span>
            </div>
            <div className="summary">
              <label>Alamat</label>
              <span>Badung, Bali</span>
            </div>
          </div>
          <div className="more">
            <a href="https://www.linkedin.com/in/ni-wayan-windayani-a6614b159/" target="blank"><button className="know-more">Know More</button></a>
          </div>
        </div>
        </div>
      </div>
      
      

    </div>
  )
}

export default About
