import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';
import logo from './logo.svg';
import './App.css';

const defaultState = {
  isEditMode: false
};

// Connecting out site to the GraphQL API
const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjjoov78z2j9t01gclcnhwlb9/master',
  clientState: {
    defaults: defaultState
  }
});

// Running our query outside of React
// client
//   .query({
//     query: testQuery
//   })
//   .then(res => console.log(res));

// Apollo Provider attached the client to our React app
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Link to={'/'}>
                <h1 className="App-title">GraphQL is Great</h1>
              </Link>
            </header>
            <main>
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/post/new" component={NewPost} />
                <Route path="/post/:id" component={Post} />
              </Switch>
            </main>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
