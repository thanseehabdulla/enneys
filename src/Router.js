import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './Containers/HomePage';
import ViewAll from './Containers/ViewAll';
import ViewCategory from './Containers/ViewCategory';
import ViewListing from './Containers/ViewListing';
import SignIn from './Containers/SignIn';
import SignUp from './Containers/SignUp';
import Pricing from './Containers/Pricing';
import Support from './Containers/Support'

import React from 'react'

const Routes = () => (
    <Router>
      <Route exact path="/viewall" component={ViewAll} />
      <Route exact path="/viewcategory" component={ViewCategory} />
      <Route exact path="/viewlisting" component={ViewListing} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/" component={App} />
    </Router>
  )


export default Routes