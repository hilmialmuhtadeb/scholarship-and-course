import React, { useEffect, useState } from 'react'
import { Pagination, ScholarshipCard } from '../../components'

const Scholarship = (props) => {
  const [dataScholarship, setDataScholarship] = useState([]);
  const [pageInformation, setPageInformation] = useState({});
  const [counter, setCounter] = useState(1);

  const {total_data, per_page, current_page} = pageInformation;
  const total_page = Math.ceil(total_data/per_page);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : (counter - 1));
  }
  
  const next = () => {
    setCounter(counter >= total_page ? total_page : (counter + 1));
  }

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`http://localhost:4000/v1/scholarships?category=${props.category}&page=${counter}&perPage=9`);
      response = await response.json();
      setDataScholarship(response.data);
      setPageInformation(response);
    }
    
    fetchData();
  }, [counter, props]);

  let addScholarshipButton;
  if (props.user) {
    addScholarshipButton = (
      <a href="/add-scholarship" className="btn btn-primary">
        Tambah Informasi Beasiswa
      </a>
    )
  } else {
    addScholarshipButton = (
      <a href="/login" className="btn btn-primary">
        Masuk Untuk Tambah Beasiswa
      </a>
    )
  }
  
  return (
    <main className="container my-5">

      <div className="text-center mb-4">
        <h1 className='fw-normal'>Kategori Beasiswa : <span className="fw-bold">{props.category < 2 ? 'Pendidikan' : 'Kursus'}</span></h1>
      </div>

      <div className="d-flex justify-content-end mb-4">
        { addScholarshipButton }
      </div>

      <div className="row">
      {
        pageInformation.total_data > 0 ? (
          dataScholarship.map((scholarship) => {
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
        ) : (
          <div className="row justify-content-center">
            <div className="col-sm-8 bg-danger rounded-3 text-center p-2 mt-5">
              <p className="text-white m-0">Belum ada beasiswa tersedia.</p>
            </div>
          </div>
        )
      }
      </div>

      {
        pageInformation.total_data > 0 ? (
          <Pagination 
            previous={previous}
            next={next}
            current_page={current_page}
            total_page={total_page}
          />
        ) : undefined
      }

    </main>
  )
}

export default Scholarship
