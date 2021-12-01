import React from 'react'
import { ScholarshipImage } from '../../assets'
import { Divider } from '../../components'
import "./detailScholarship.css"

const DetailScholarship = () => {
  return (
    <main className="container my-4">

      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <img src={ScholarshipImage} alt="Poster Beasiswa" />
          <Divider color="black" />
          <h1 className="scholarship__title my-4">Beasiswa UMN (Universitas Multimedia Nusantara) Kuliah S1 Tahun 2021</h1>
          <p className="text-secondary">Batas Pengajuan : 17 Maret 2022</p>
          <p className="text-opacity-50 text-start">
            <p className="scholarship__detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odit eligendi veniam maxime et atque cum ut aspernatur repudiandae iste voluptas nesciunt saepe laudantium aliquid minima! Odit similique eveniet, earum natus rem eligendi quam aut aliquam, pariatur eum architecto esse iure ipsa qui, iste quo magni voluptas reprehenderit temporibus vitae voluptate maxime saepe! Cupiditate veniam nisi soluta natus consectetur beatae.
            </p>
            <p className="scholarship__detail">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae voluptas quisquam, provident quas enim libero, quo aperiam omnis, non possimus incidunt aspernatur laborum totam beatae labore? Dolores officiis ullam suscipit quidem quisquam veritatis voluptate, aut saepe sint nemo nulla consequuntur voluptates velit quasi, sapiente cum doloribus? Sed, animi ducimus.
            </p>
          </p>
        </div>
      </div>

    </main>
  )
}

export default DetailScholarship
