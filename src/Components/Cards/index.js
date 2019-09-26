import React from 'react';
import Modal from 'react-responsive-modal';
import ReactPlayer from 'react-player'

class Cards extends React.Component {

    state = {
        open: false,
      };

      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };

  render() {

    const {data} = this.props

    return (
        <div className="card-img-container">
          <img onClick={this.onOpenModal}
        
            className="lazy-img-loader loaded"
            src={data.imageUrl}
          />
    
        
        {this.state.open && <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div style={{marginTop:"30px"}}><ReactPlayer playing={false} url={data.videoLink}/></div>
          <h2 style={{marginTop:"25px"}}>{data.title}</h2>

          <p>{data.description}</p>
        </Modal>}
        
        </div>
    );
  }
}

export default Cards;
