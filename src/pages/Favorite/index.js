import React, { useEffect, useState } from 'react'
import { ScholarshipCard } from '../../components';

const Favorite = (props) => {
  const [dataScholarship, setDataScholarship] = useState();
  
  useEffect(() => {
    if (props.user) {
      const username = props.user.username;
      const fetchData = async () => {
        let response = await fetch(`http://localhost:4000/v1/favorites/${username}`);
        response = await response.json();
        setDataScholarship(response.data);
      }
      fetchData();
    }
  }, [props])

  let showScholarshipCards;
  if (dataScholarship) {
    if (dataScholarship.length > 0) {

      showScholarshipCards = (
        dataScholarship.map((scholarship) => {
          if (scholarship) {
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
          } else {
            return '';
          }
        })
      );

    } else {
      showScholarshipCards = (
        <div className="row justify-content-center">
          <div className="col-sm-8 bg-danger rounded-3 text-center p-2 mt-5">
            <p className="text-white m-0">Belum ada beasiswa disimpan.</p>
          </div>
        </div>
      );
    }
  } else {
    showScholarshipCards = <p className='text-center my-5'>Loading...</p>
  }
  
  return (
    <main className="container my-5">

      <div className="text-center mb-4">
        <h1 className='fw-normal'>Beasiswa <span className="fw-bold">Disimpan</span></h1>
      </div>

      <div className="row">
      { showScholarshipCards }
      </div>

    </main>
  )
}

export default Favorite
