import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ApolloClient,ApolloProvider,createNetworkInterface} from 'react-apollo';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';


const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });
const client = new ApolloClient({
  networkInterface,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
       <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Contact} />
        </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
