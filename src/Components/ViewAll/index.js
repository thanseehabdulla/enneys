import React from 'react';
import ReactPlayer from 'react-player'

class ViewAll extends React.Component {
  render() {
    const {data} = this.props

    return <div>
        <div style={{marginTop:"30px"}}><ReactPlayer width="100%" playing={false} url={data.data[0].videoLink}/></div>
          <h2 style={{marginTop:"25px"}}>{data.data[0].title}</h2>

          <p>{data.data[0].description}</p>
    </div>;
  }
}

export default ViewAll;
