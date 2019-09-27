import React from 'react';
import NewComponent from '../Components/Topbar';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards'

import viewalldata from '../datas/viewAllData'

class ListingContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <NewComponent />
        <div className="container">
        <h2 class="tray-title">{viewalldata.category}<i class="right-arrow slide-in-left"></i></h2>
        <div className="listing">
        {(viewalldata.data||[]).map(subdata=> <div><Cards data={subdata} /></div>)
              }
              </div>
              </div>
        <Footer />
      </div>
    );
  }
}

export default ListingContainer;
