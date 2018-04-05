import React from 'react';
import ContactInfo from './ContactInfo';
import Contact from './Contact';
import { gql,graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import ContactList from './ContactList';
export default class Home extends React.Component{

  render(){
      return (
        <div className = "container">
          <ContactList />
          <div className="contactInfo">
              <h3 className="name">FirstName LastName</h3>
              <section>
                  <p className="phone">
                    <label id='name'><b>Phone : </b></label>
                  </p>
                  <p className="email">
                    <label id='name'><b>Email :</b> </label>
                  </p>
                  <p className="address">
                    <label id='name' ><b>Address : </b></label>
                  </p>
              </section>
          </div>
        </div>
      );
  }
}
