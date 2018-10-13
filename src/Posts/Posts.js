import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Link className="button" to={'/post/new'}>
          New Post
        </Link>
        <ul className="posts-listing">
          <Query query={POSTS_QUERY}>
            {({ loading, data }) => {
              if (loading) return 'Loading...';
              const { posts } = data;
              return posts.map(post => (
                <li key={post.id}>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </li>
              ));
            }}
          </Query>
        </ul>
      </div>
    );
  }
}

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
