import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Scholarship, Favorite, DetailScholarship, AddScholarship, About } from '..'
import { Footer, Navigation } from '../../components'
import './mainApp.css';

const MainApp = (props) => {
  return (
    <div className="main-app-wrapper">

      <Navigation user={props.user} />

      <div className="content-wrapper">
        <Router>
          <Switch>

            <Route path="/scholarships">
              <Scholarship category="1" user={props.user}/>
            </Route>

            <Route path="/courses">
              <Scholarship category="2" user={props.user}/>
            </Route>

            <Route path="/favorites/:username">
              <Favorite user={props.user}/>
            </Route>

            <Route path="/detail-scholarship/:id">
              <DetailScholarship user={props.user} />
            </Route>

            <Route path="/add-scholarship/:id?">
              <AddScholarship user={props.user} />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/" exact>
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
