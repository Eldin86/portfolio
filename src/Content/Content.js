import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
/* Update pages */
import UpdateHome from './UpdatePages/UpdateHome'
import UpdateAboutInfo from './UpdatePages/UpdateAboutInfo'
import UpdateHobbies from './UpdatePages/UpdateHobbies'
import UpdatePortfolio from './UpdatePages/UpdatePortfolio'
import UpdateEducation from './UpdatePages/UpdateEducation'
import UpdateExperience from './UpdatePages/UpdateExperience'
import UpdateProffesionalSkills from './UpdatePages/UpdateProffesionalSkills'
import UpdatePersonalSkills from './UpdatePages/UpdatePersonalSkills'

import './Content.css'

const Content = (props) => {
    return (
        <div className={`ContentContainer ${props.isClosedNav ? 'Contentopen' : 'Contentclose'}`}>
            <Switch>
                {/* Homepage */}
                <Route exact path="/">
                    <Home />
                </Route>
                {/* Update Title from Homepage */}
                <Route exact path="/update/title">
                    <UpdateHome />
                </Route>

                {/* About page */}
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/update/info">
                    <UpdateAboutInfo />
                </Route>
                <Route path="/update/hobbie/:id">
                    <UpdateHobbies />
                </Route>
                {/* Portfolio page */}
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route exact path="/update/portfolio/:id">
                    <UpdatePortfolio />
                </Route>

                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/update/education/:id">
                    <UpdateEducation/>
                </Route>
                <Route path="/update/experience/:id">
                    <UpdateExperience/>
                </Route>
                <Route path="/update/proffesional-skills/:id">
                    <UpdateProffesionalSkills/>
                </Route>
                <Route path="/update/personal-skills/:id">
                    <UpdatePersonalSkills/>
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default Content