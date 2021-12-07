import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { ScholarshipCard } from '../../components'

const Scholarship = () => {
  const [dataScholarship, setDataScholarship] = useState([]);
  const [pageInformation, setPageInformation] = useState({})
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
      let response = await fetch(`http://localhost:4000/v1/scholarships?page=${counter}&perPage=3`);
      response = await response.json();
      setDataScholarship(response.data);
      setPageInformation(response);
    }
    
    fetchData();
  }, [counter]);
  
  return (
    <main className="container my-5">
      <div className="d-flex justify-content-end mb-4">
        <a href="/add-scholarship" className="btn btn-primary">
          Tambah Informasi Beasiswa
        </a>
      </div>
      <div className="row">
        {dataScholarship.map((scholarship) => {
          return (
            <div className="col-md-4">
              <ScholarshipCard
                key={scholarship._id}
                title={scholarship.title}
                deadline={scholarship.deadline}
                poster={`http://localhost:4000/v1/${scholarship.poster}`}
                description={scholarship.description}
                name={scholarship.author.name}
              />
            </div>
          )
        })}
      </div>
      <div className="d-flex justify-content-center">
        <Button className="mx-2" color="warning" onClick={previous}>&#10094;</Button>
        <p className="d-flex my-0 mx-4 align-items-center fw-bold">{current_page} / {total_page}</p>
        <Button className="mx-2" color="warning" onClick={next}>&#10095;</Button>
      </div>
    </main>
  )
}

export default Scholarship
