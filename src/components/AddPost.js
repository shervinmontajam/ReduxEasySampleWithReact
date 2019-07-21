import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";

class AddPost extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      tag: ""
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      description: this.state.description,
      tag: this.state.tag
    };

    console.log(post);

    this.props.addPost(post);
  };

  CreateRender = () => {
    return (
      <form className="ui form" onSubmit={event => this.handleOnSubmit(event)}>
        <div className="field">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            onChange={event => this.setState({ title: event.target.value })}
          />
        </div>
        <div className="field">
          <label>Description: </label>
          <textarea
            name="description"
            placeholder="Enter the description"
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />
        </div>
        <div className="field">
          <label>Tag: </label>
          <input
            type="text"
            name="tag"
            placeholder="Enter the tag"
            onChange={event => this.setState({ tag: event.target.value })}
          />
        </div>
        <input type="submit" className="ui button primary" value="Add Post" />
      </form>
    );
  };

  render() {
    return this.CreateRender();
  }
}

export default connect(
  null,
  { addPost }
)(AddPost);
