import React from 'react';
import ContactInfo from './ContactInfo';
import Contact from './Contact';
import { gql,graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
class ContactList extends React.Component{

  constructor(){
    super();
    this.state = {
      person : '',
      search : ''
    };
  }

  handleSearch(event){
    var searchQuery = event.target.value.toLowerCase();
    this.setState({
        search : searchQuery
    });
  }

  handleClick(contact){
    this.setState({
      person :contact
    });
  }

  render(){
      let {data} = this.props
      if (data.loading) {
        return <p>Loading ...</p>;
      }
      return (
          <div className="contactList">
            <p className="title"><b>All Contacts</b></p>
                <input type="text" placeholder="Search.." className="search" onChange= {this.handleSearch.bind(this)} />
                <button className="submit" >🔍</button>
                  {this.state.search && data.channels.filter((person)=>{ var fullName = person.firstname.toLowerCase() + person.lastname.toLowerCase();
                      return fullName.indexOf(this.state.search) != -1; }).map(ch =>
                        (<div key={ch.id} className="contact">
                          <Link to={`/${ch.id}`} className="contactlink">{ch.firstname}  {ch.lastname}</Link>
                        </div>))
                  }
                  {!this.state.search && data.channels.map(ch =>(<div key={ch.id} className="contact">
                          <Link to={`/${ch.id}`} className="contactlink">
                              {ch.firstname}  {ch.lastname}
                          </Link>
                      </div>))
                  }
            </div>);
          }
    }

const query = gql`
{     channels {
      id
      firstname
      lastname
      email
      phone
      address
    }
  }
`;
export default (graphql(query)(ContactList));
