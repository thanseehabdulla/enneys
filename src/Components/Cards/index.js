import React from 'react';


class Cards extends React.PureComponent {
  render() {

    const {data} = this.props

    return (
        <div className="card-img-container">
          <img
            className="lazy-img-loader loaded"
            src={data.imageUrl}
          />
        </div>
    );
  }
}

export default Cards;
