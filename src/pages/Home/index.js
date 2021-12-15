import React from 'react';
import { HomepageImage } from '../../assets'
import "./home.css"

const Home = () => {
  
  return (
    <main>
      <img className="img-fluid" width="100%" src={HomepageImage} alt="Poster Homepage"/>
      <p className="homepage-text text-center">Temukan beasiswa dan kursus keinginanmu dengan mudah!</p>
      <a href="/scholarship"><button className="btn-action">Get Started</button></a>
    </main>
  )
}

export default Home