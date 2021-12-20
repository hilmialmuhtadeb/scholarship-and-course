import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container my-5">
        <h2 className='footer__title'>
          <span className="logo-text text-blue">Scholarship and Course</span>
        </h2>
        <p className='footer__tagline'>Raih Kesempatan Belajarmu!</p>
      </div>
      <div className="container">

        <div className="row mb-4">

          <div className="col-md-3">
            <h3 className="footer__subtitle mb-4">Layanan Kami</h3>
            <ul>
              <li className="footer_list-item">
                <a href="/scholarships">Beasiswa Pendidikan</a>
              </li>
              <li className="footer_list-item">
                <a href="/courses">Beasiswa Kursus</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="footer__subtitle mb-4">Sosial Media</h3>
            <ul>
              <li className="footer_list-item">
                <a href="https://www.instagram.com/dicoding"><i class="fa fa-instagram text-danger"></i> Instagram</a>
              </li>
              <li className="footer_list-item">
                <a href="https://twitter.com/dicoding"><i class="fa fa-twitter text-primary"></i> Twitter</a>
              </li>
              <li className="footer_list-item">
                <a href="https://www.facebook.com/dicoding/"><i class="fa fa-facebook-square text-primary"></i> Facebook</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="footer__subtitle mb-4">Kantor Kami</h3>
            <ul>
              <li className="footer_list-item mb-3">
                <i class="fa fa-map-marker text-danger"></i> Pondok Benowo Indah Blok T-21, Babat Jerawat, Pakal, Surabaya, Jawa Timur, Indonesia, 60197.
              </li>
              <li className="footer_list-item mb-3">
                <i class="fa fa-map-marker text-danger"></i> Jalan Taman Putri II No. 3, Mumbul, Badung, Bali, Indonesia, 80361.
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="footer__subtitle mb-4">Pusat Bantuan</h3>
            <ul>
              <li className="footer_list-item">
                windayani@gmail.com
              </li>
              <li className="footer_list-item mb-3">
                almuhtadeb@gmail.com
              </li>
              <li className="footer_list-item">
                ☎️ 0878-6546-3510 (winda)
              </li>
              <li className="footer_list-item mb-3">
                ☎️ 0896-0162-8845 (Hilmi)
              </li>
            </ul>
          </div>

        </div>

      </div>
      <div className="footer__bottom d-flex text-center align-items-center justify-content-center">
        &copy; 2021 <span className="mx-2 logo-text">Scholarship and Course</span>
      </div>
    </footer>
  )
}

export default Footer
