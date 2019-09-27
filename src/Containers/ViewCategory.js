import React from 'react';
import NewComponent from '../Components/Topbar';
import Footer from '../Components/Footer';

import categorydata from '../datas/categorydata'
import {Link} from 'react-router-dom'

class ViewCategoryContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <NewComponent />
        <div className="category">
          {categorydata.map ( e => <div className="card zoom card-category">
            <Link to="/viewall"><div className="container">
              <h4>
                <b>{e.name}</b>
              </h4>
              <p>{e.desc}</p>
            </div></Link>
          </div> )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewCategoryContainer;
