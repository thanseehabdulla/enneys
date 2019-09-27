import React from 'react';
import Modal from 'react-responsive-modal';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';

class Cards extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { data } = this.props;

    return (
      <div className="card-img-container card-margin">
        <img
          onClick={this.onOpenModal}
          className="lazy-img-loader loaded zoom"
          src={data.imageUrl}
        />

        {this.state.open && (
          <Modal
            center
            animationDuration={1000}
            open={this.state.open}
            onClose={this.onCloseModal}
            center
          >
            <div style={{ marginTop: '30px' }}>
              <ReactPlayer width="100%" playing={false} url={data.videoLink} />
              <Link to="/viewall"><h6 style={{ marginTop: '25px' }}>Expand</h6></Link>

            </div>
            <h2 style={{ marginTop: '25px' }}>{data.title}</h2>

            <p>{data.description}</p>
          </Modal>
        )}
      </div>
    );
  }
}

export default Cards;
