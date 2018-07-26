import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';
import Posts from './data/Posts';

import './styles.scss';

class App extends Component {
  state = {
    posts: [],
  };

  componentWillMount() {
    this.setState({ posts: Posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        {posts.map(post => <Post key={post.id} post={post} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
