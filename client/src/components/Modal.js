import React from 'react';
import PropTypes from 'prop-types';
import { gql,graphql } from 'react-apollo';
import { Button, Input, Checkbox } from 'antd';
class Modal extends React.Component {
  state = {
    email: '',
    address: '',
    phone: '',
    id: this.props.contact.id
  }
  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
  }
  onSubmit = () => {
    const response = this.props.mutate({
      variables: this.state,
    });
    console.log(this.state);
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 50,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };


    const modalStyle = {
      backgroundColor: '#fff',
      maxWidth: 500,
      maxHeight: 500,
      margin: '0 auto',
      padding: 60
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <div >

          <button  onClick={this.props.onClose} className="close-button">x</button>
        </div>
        <form onSubmit={event => event.preventDefault()} className="layout">
            <label className="formLabel">Phone:
                <input type="text"  className="editForm" name ="phone" value={this.state.phone} placeholder="Contact Phone Number..." onChange={e => this.onChange(e)} value={this.state.username}  />
            </label>
            <label className="formLabel">Email:
                <input type="text" name="email" className="editForm" onChange={e => this.onChange(e)}  placeholder="Contact Email Address" value={this.state.email} />
            </label>
            <label className="formLabel">Address:
                <input type="text" name="address" className="editForm" value={this.state.address} placeholder="Contact Address..." onChange={e => this.onChange(e)} />
            </label>
                <button onClick={() => this.onSubmit()}  className="formSubmit">Submit</button>
         </form>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

const mutation = gql`
mutation($id:Int!,$email: String, $phone: String,$address: String) {
	edit(id:$id ,email: $email, phone: $phone, address: $address) {
	   firstname
     lastname
     phone
     email
     address
     id
	}
}
`;

export default graphql(mutation)(Modal);
