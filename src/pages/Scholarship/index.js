import React, { useEffect, useState } from 'react'
import { addScholarshipButtonCreator, createPagination, createScholarshipList } from '../../utils/templates/ScholarshipListHelper';
import { getAllScholarship } from '../../utils/ScholarshipHandler';

const Scholarship = (props) => {
  const [dataScholarship, setDataScholarship] = useState([]);
  const [pageInformation, setPageInformation] = useState({});
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    getAllScholarship(props.category, counter)
      .then((response) => {
        setDataScholarship(response.data);
        setPageInformation(response);
      })
  }, [counter, props.category]);

  const scholarshipList = createScholarshipList(pageInformation, dataScholarship);
  const pagination = createPagination(pageInformation, counter, setCounter);
  const addScholarshipButton = addScholarshipButtonCreator(props.user);
  
  return (
    <main className="container my-5">

      <div className="text-center mb-4">
        <h1 className='fw-normal'>Kategori Beasiswa : <span className="fw-bold">{props.category < 2 ? 'Pendidikan' : 'Kursus'}</span></h1>
      </div>

      <div className="d-flex justify-content-end mb-4">
        { addScholarshipButton }
      </div>

      <div className="row">
        { scholarshipList }
      </div>

      { pagination }

    </main>
  )
}

export default Scholarship
