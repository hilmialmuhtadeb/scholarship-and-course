import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Scholarship, DetailScholarship, AddScholarship, About } from '..'
import { Footer, Navigation } from '../../components'
import './mainApp.css';

const MainApp = () => {
  return (
    <div className="main-app-wrapper">

      <Navigation />

      <div className="content-wrapper">
        <Router>
          <Switch>

            <Route path="/scholarships">
              <Scholarship />
            </Route>

            <Route path="/detail-scholarship/:id">
              <DetailScholarship />
            </Route>

            <Route path="/add-scholarship/:id?">
              <AddScholarship />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  )
}

export default MainApp
