import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from  './homepage';
import AboutMe from  './aboutme';
import Contact from  './contact';
// import Resume from  './resume';
import Projects from  './projects';

const Main = () => (
    <Switch>
        <Route exact  path="/" component={HomePage} />
        <Route  path="/contact" component={Contact} />
        {/* <Route  path="/resume" component={Resume} /> */}
        <Route  path="/projects" component={Projects} />
        <Route  path="/aboutme" component={AboutMe} />
    </Switch>
)
export default Main;