import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import './scholarshipCard.css'

const ScholarshipCard = (props) => {
  const {title, poster, description, name, id} = props;
  console.log(poster);
  const deadline = new Date(props.deadline);
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  return (
    <div>
      <Card className="mb-4 shadow">
        <img src={poster} alt={title} className="img-card" />
        <CardBody>
          <CardTitle tag="h5">
            {title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="small"
          >
            {`${deadline.getDate()} ${months[deadline.getMonth()]} ${deadline.getFullYear()}`} &middot; {name}
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
