import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { StudyIllustration } from '../../assets'
import { createScholarshipCardCheck } from '../../utils/templates/HomepageHelper';
import "./home.css"

const Home = () => {
  const [dataScholarship, setDataScholarship] = useState([]);
  const [dataCourse, setDataCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`http://localhost:4000/v1/scholarships?category=1`);
      response = await response.json();
      setDataScholarship(response.data.slice(0,3));

      response = await fetch(`http://localhost:4000/v1/scholarships?category=2`);
      response = await response.json();
      setDataCourse(response.data.slice(0,3));
    }
    
    fetchData();
  }, []);

  const showScholarship = createScholarshipCardCheck(dataScholarship);
  const showCourse = createScholarshipCardCheck(dataCourse);
  
  return (
    <main>

      <section id="hero">
        <div className="container">
<<<<<<< HEAD
          <div className="row hero-wrapper mt-4 justify-content-between">
=======
          <div className="row mt-4 justify-content-between">
>>>>>>> 33c379c040b1109819766e61b6b50dd1f4b7f10d
            <div className="col-sm-7 pe-3 d-flex flex-column justify-content-center">
              <h1 className='fw-bold title'>Raih Kesempatan Belajarmu</h1>
              <p className='text-secondary'>Semua orang berhak untuk mendapatkan pendidikan terbaik. Informasi beasiswa terlengkap dan terbaru ada di Scholarship and Course.</p>
              <a href="/scholarships">
                <Button color='primary' outline className='px-4'>Cari Beasiswa</Button>
              </a>
            </div>
            <div className="col-sm-5">
<<<<<<< HEAD
              <img className='img-fluid hero-img' src={StudyIllustration} alt="ilustrasi belajar" />
=======
              <img className='img-fluid' src={StudyIllustration} alt="ilustrasi belajar" />
>>>>>>> 33c379c040b1109819766e61b6b50dd1f4b7f10d
            </div>
          </div>
        </div>
      </section>

      <section className='mt-5 py-4' id="scholarships">
        <div className="container">

          <h2 className="fw-bold mb-4 subtitle text-center">Beasiswa Terbaru</h2>

          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="fw-bold m-0 subtitle text-text-black-50">A. Pendidikan</h3>
            <a href="/scholarships">
              <Button size="sm fw-bold">Lihat Semua</Button>
            </a>
          </div>
          <div className="row mb-4">
            { showScholarship }
          </div>

          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="fw-bold m-0 subtitle text-text-black-50">B. Kursus</h3>
            <a href="/courses">
              <Button size="sm fw-bold">Lihat Semua</Button>
            </a>
          </div>
          <div className="row">
            { showCourse }
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className='py-5' id="testimonial">
        <div className="container">
          <h2 className="fw-bold m-0 subtitle mb-4">Testimoni</h2>
=======
      <section className='py-5' id="glance">
        <div className="container">
          <h2 className="fw-bold m-0 subtitle mb-4">Sekilas Kami</h2>
>>>>>>> 33c379c040b1109819766e61b6b50dd1f4b7f10d
          <div className="row">

          </div>
        </div>
      </section>

    </main>
  )
}

export default Home