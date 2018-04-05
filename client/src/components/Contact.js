import React from 'react';
import ContactInfo from './ContactInfo';
import {gql,graphql} from 'react-apollo';
import { Link } from 'react-router-dom';
import ContactList from './ContactList';
import Modal from './Modal';

const Contact = ({ data: {loading, error, channel }, match }) => {

  if (loading) {
    return <p>Contact Not Found</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if(channel == null){
     return <div className="NotFound">404 Not Found</div>
  }
  return (
    <div className = "container">
      <ContactList />
      <ContactInfo person={channel}/>
    </div>
  );
}

export const detailQuery = gql`
  query detailQuery($id : Int!) {
    channel(id: $id) {
      id
      firstname
      lastname
      email
      address
      phone
    }
  }
`;

export default (graphql(detailQuery, {
  options: (props) => ({
    variables: { id: props.match.params.id }
  }),
})(Contact));
