import React, { Component } from 'react';

export default class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit } = this.props;
    const { title, body } = this.state;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            variables: {
              title,
              body
            }
          })
            .then(() => {
              this.setState({
                title: '',
                body: ''
              });
            })
            .catch(e => console.log(e));
        }}
      >
        <input
          name="title"
          type="text"
          onChange={this.handleInput}
          value={title}
          placeholder="title"
        />
        <textarea
          name="body"
          type="text"
          onChange={this.handleInput}
          value={body}
          placeholder="body"
        />
        <button>Submit</button>
      </form>
    );
  }
}
