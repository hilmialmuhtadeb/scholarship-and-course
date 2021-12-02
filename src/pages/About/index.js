import React from 'react'
import { IconWhatsapp, IconEmail, IconFacebook, IconInstagram, PhotoWinda} from '../../assets'
import "./about.css"

const About = () => {
  return (
    <div>
      <div className="about-us text-center">
        <h3>Tentang Kami</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae voluptas quisquam, provident quas enim libero, quo aperiam omnis, non possimus incidunt aspernatur laborum totam beatae labore? Dolores officiis ullam suscipit quidem quisquam veritatis voluptate, aut saepe sint nemo nulla consequuntur voluptates velit quasi, sapiente cum doloribus? Sed, animi ducimus.</p>
      </div>
      <div className="our-team text-center">
        <h3>Tim Kami</h3>
        <div className="our-team__item">
        <div className="leader">
          <div className="photos">
            <img src={PhotoWinda} alt="Foto Hilmi"/>
          </div>
          <h5>Hilmi Almuhtade Billah</h5>
          <div className="labels">
            <span>Leader</span>
            <span>Web Developer</span>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
          <div className="summaries">
            <div className="summary">
              <label>WhatsApp</label>
              <span>087865463510</span>
            </div>
            <div className="summary">
              <label>Alamat</label>
              <span>Jalan Taman Putri II No. 3, Mumbul, Kuta Selatan, Badung, Bali</span>
            </div>
          </div>
          <div className="more">
          <a href="https://www.linkedin.com/in/ni-wayan-windayani-a6614b159/" target="blank"><button className="know-more">Know More</button></a>
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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
          <div className="summaries">
            <div className="summary">
              <label>WhatsApp</label>
              <span>087865463510</span>
            </div>
            <div className="summary">
              <label>Alamat</label>
              <span>Jalan Taman Putri II No. 3, Mumbul, Kuta Selatan, Badung, Bali</span>
            </div>
          </div>
          <div className="more">
            <a href="https://www.linkedin.com/in/ni-wayan-windayani-a6614b159/" target="blank"><button className="know-more">Know More</button></a>
          </div>
        </div>
        </div>
      </div>
      <div className="follow-us">
        <h4>Ikuti Kami</h4>
        <a href="/"><img src={IconWhatsapp} alt="WhatsApp"/></a>
        <a href="/"><img src={IconEmail} alt="Email"/></a>
        <a href="/"><img src={IconFacebook} alt="Facebook"/></a>
        <a href="/"><img src={IconInstagram} alt="Instagram"/></a>
      </div>
      

    </div>
  )
}

export default About
