import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

// Connecting out site to the GraphQL API
const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjjoov78z2j9t01gclcnhwlb9/master'
});

// Writing our query
const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          {/* How to write Apollo queries in React */}
          <Query query={POSTS_QUERY}>
            {({ loading, data }) => {
              if (loading) return 'Loading...';
              const { posts } = data;
              return posts.map(post => <h1>{post.title}</h1>);
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
