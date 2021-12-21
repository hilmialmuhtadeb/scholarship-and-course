import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap'
import { getDetailScholarship } from '../../utils/ScholarshipHandler';
import { actionMenuCreator, breadCrumbCreator, favoriteButtonCreator, getDeadline } from '../../utils/templates/DetailScholarshipHelper'
import { isFavoritedScholarship } from '../../utils/FavoriteHandler';
import "./detailScholarship.css"

const DetailScholarship = (props) => {
  const [scholarship, setScholarship] = useState();
  const [isFavorited, setIsFavorited] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    getDetailScholarship(props.match.params.id)
      .then((response) => setScholarship(response));

    if (props.user && scholarship) {
      isFavoritedScholarship(props.user, scholarship, setIsFavorited);
      setUser(props.user);
    }
  }, [props, scholarship]);
  
  if (scholarship) {

    const breadcrumb = breadCrumbCreator(scholarship);
    const deadline = getDeadline(scholarship.deadline);

    let favoriteButton;
    let actionMenu;
    
    if (user) {
      favoriteButton = favoriteButtonCreator(isFavorited, user, scholarship);

      if (user._id === scholarship.author.user_id) {
        actionMenu = actionMenuCreator(scholarship);
      }
    } else {
      favoriteButton = (
        <a href="/login" className="text-decoration-none">
          <Button color='primary' className='my-4' block>Masuk dan Tambahkan ke Favorit</Button>
        </a>
      );
    }

    return (
      <main className="container my-4">
  
        <div className="row justify-content-center">

          <div className="col-md-6 mb-4 mb-md-0">
            <img src={`http://localhost:4000/v1/${scholarship.poster}`} alt="Poster Beasiswa" className="poster-image mb-3" />
            { actionMenu }
          </div>

          <div className="col-md-6">
            <Breadcrumb>
              <BreadcrumbItem>
                {breadcrumb}
              </BreadcrumbItem>
              <BreadcrumbItem className='scholarship__breadcrumb' active>
                {scholarship.title}
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="scholarship__title my-2">{scholarship.title}</h1>
            <p className="text-danger"><i>Batas aplikasi : {deadline}</i></p>
            <p className="text-opacity-50 text-start scholarship__description my-5">
                {scholarship.description}
            </p>
            <p className="text-start text-secondary">Ditulis oleh {scholarship.author.name}</p>
            
            { favoriteButton }
          </div>

        </div>
  
      </main>
    )
  } else {
    return <p className="loading-text">Loading ....</p>
  }
}

export default withRouter(DetailScholarship)
