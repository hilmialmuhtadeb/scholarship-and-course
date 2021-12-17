import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import './scholarshipCard.css'

const ScholarshipCard = (props) => {
  const {title, poster, description, name, id} = props;
  const deadline = new Date(props.deadline);
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  return (
    <div>
      <Card className="scholarship-card mb-4 bg-transparent">
        <a href={`/detail-scholarship/${id}`}>
          <img src={poster} alt={title} className="img-card" />
        </a>
        <CardBody>
          <CardTitle tag="h5" className='scholarship-card__title'>
            {title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="small"
            >
            <p className='m-0 fw-bold'>{name}</p>
            <p className="mb-2">Batas aplikasi : <span className="text-danger">{`${deadline.getDate()} ${months[deadline.getMonth()]} ${deadline.getFullYear()}`}</span></p>
          </CardSubtitle>
          <CardText className="scholarship-card__text">
            {description}
          </CardText>
          <a href={`/detail-scholarship/${id}`} className="link-primary">Selengkapnya</a>
        </CardBody>
      </Card>
    </div>
  )
}

export default ScholarshipCard
