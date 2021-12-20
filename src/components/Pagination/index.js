import React from 'react'
import { Button } from 'reactstrap'

const Pagination = (props) => {
  const {previous, next, current_page, total_page} = props;
  
  return (
    <div className="d-flex justify-content-center mt-4">
      <Button className="mx-2" color="warning" onClick={previous}>&#10094;</Button>
      <p className="d-flex my-0 mx-4 align-items-center fw-bold">{current_page} / {total_page}</p>
      <Button className="mx-2" color="warning" onClick={next}>&#10095;</Button>
    </div>
  )
}

export default Pagination
