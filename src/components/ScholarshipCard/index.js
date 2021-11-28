import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import './scholarshipCard.css'
import { ScholarshipImage } from '../../assets'

const ScholarshipCard = () => {
  return (
    <div>
      <Card className="mb-4 shadow">
        <CardImg
          alt="Card image cap"
          src={ScholarshipImage}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Beasiswa Pertamina Sobat Bumi 2021
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="small"
          >
            S1 dan D3
          </CardSubtitle>
          <CardText className="scholarship-card__text">
            Beasiswa Pertamina Sobat Bumi merupakan apresiasi kepada mahasiswa berprestasi secara akademik, aktif dalam organisasi atau kegiatan sosial-kemasyarakatan, serta memiliki kepedulian terhadap lingkungan.
          </CardText>
          <a href="/" className="link-primary">Selengkapnya</a>
        </CardBody>
      </Card>
    </div>
  )
}

export default ScholarshipCard
