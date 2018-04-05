import React from 'react';
import Modal from './Modal';

export default class ContactInfo extends React.Component{

   constructor() {
      super();
      this.state = { isOpen: false };
    }

    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
     <div className="contactInfo">
       <h3 className="name">{this.props.person.firstname} <b>{this.props.person.lastname}</b></h3>
       <section>
         <p className="info">
            <label id='name'>Phone : {this.props.person.phone}</label>
         </p>
         <p className="info">
            <label id='name'>Email : {this.props.person.email}</label>
         </p>
         <p className="info">
            <label id='name' >Address : {this.props.person.address}</label>
         </p>
       </section>
       <button onClick={this.toggleModal} className="button">Edit</button>
       <Modal show={this.state.isOpen} onClose={this.toggleModal} contact={this.props.person}></Modal>
     </div>
   );
  }
}
