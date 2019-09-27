import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './Containers/HomePage';
import ViewAll from './Containers/ViewAll';
import ViewCategory from './Containers/ViewCategory';
import ViewListing from './Containers/ViewListing';
import React from 'react'

const Routes = () => (
    <Router>
      <Route exact path="/viewall" component={ViewAll} />
      <Route exact path="/viewcategory" component={ViewCategory} />
      <Route exact path="/viewlisting" component={ViewListing} />
      <Route exact path="/" component={App} />
    </Router>
  )


export default Routes