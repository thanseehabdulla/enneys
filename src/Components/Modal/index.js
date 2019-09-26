import React from 'react'
import Modal from 'react-responsive-modal';

class Modals extends React.Component{


    render(){

        const {open} = this.props

        return(
            <div>
        {/* <button onClick={this.onOpenModal}>Open modal</button> */}
        <Modal open={open} onClose={this.props.onCloseModal()} center>
          <h2>Simple centered modal</h2>
        </Modal>
            </div>
        )
    }
}

export default Modals