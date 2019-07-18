import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPost } from '../actions';

class PostList extends Component {
  renderList() {
    return this.props.postList.map(post => {
      return (
        <div className="item" key={post.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectPost(post)}
            >
              Select
            </button>
          </div>
          <div className="content">{post.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { postList: state.postList };
};

//--> connect function connect this component to the redux store and action functions so they are
//--> avaiable from props here in this component
export default connect(
  mapStateToProps,
  { selectPost }
)(PostList);
