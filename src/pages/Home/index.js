import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { StudyIllustration } from '../../assets'
import { ScholarshipCard } from '../../components';
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

  const _createScholarshipCards = (scholarshipArr) => {
    return scholarshipArr.map((scholarship) => {
      return (
        <div className="col-md-4">
          <ScholarshipCard
            key={scholarship._id}
            title={scholarship.title}
            deadline={scholarship.deadline}
            poster={`http://localhost:4000/v1/${scholarship.poster}`}
            description={scholarship.description}
            name={scholarship.author.name}
            id={scholarship._id}
          />
        </div>
      )
    })
  }

  const _createEmptyScholarship = () => {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8 bg-danger rounded-3 text-center p-2 mt-5">
          <p className="text-white m-0">Belum ada beasiswa tersedia.</p>
        </div>
      </div>
    )
  }
  
  const _createScholarshipCardCheck = (arr) => {
    if (arr.length > 0) {
      return _createScholarshipCards(arr);
    } else {
      return _createEmptyScholarship();
    }
  }

  const showScholarship = _createScholarshipCardCheck(dataScholarship);
  const showCourse = _createScholarshipCardCheck(dataCourse);
  
  return (
    <main>

      <section id="hero">
        <div className="container">
          <div className="row mt-4 justify-content-between">
            <div className="col-sm-7 pe-3 d-flex flex-column justify-content-center">
              <h1 className='fw-bold title'>Raih Kesempatan Belajarmu</h1>
              <p className='text-secondary'>Semua orang berhak untuk mendapatkan pendidikan terbaik. Informasi beasiswa terlengkap dan terbaru ada di Scholarship and Course.</p>
              <a href="/scholarships">
                <Button color='primary' outline className='px-4'>Cari Beasiswa</Button>
              </a>
            </div>
            <div className="col-sm-5">
              <img className='img-fluid' src={StudyIllustration} alt="ilustrasi belajar" />
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
          <div className="row">
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

      <section className='py-5' id="glance">
        <div className="container">
          <h2 className="fw-bold m-0 subtitle mb-4">Sekilas Kami</h2>
          <div className="row">

          </div>
        </div>
      </section>

    </main>

    // <main>
    //   <img className="img-fluid" width="100%" src={HomepageImage} alt="Poster Homepage"/>
    //   <p className="homepage-text text-center">Temukan beasiswa dan kursus keinginanmu dengan mudah!</p>
    //   <a href="/scholarship"><button className="btn-action">Get Started</button></a>
    // </main>
  )
}

export default Home