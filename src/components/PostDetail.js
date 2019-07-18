import React from 'react';
import { connect } from 'react-redux';

const PostDetail = ({ post }) => {
  if (!post) {
    return <div>Select a post</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {post.title}
        <br />
        Description: {post.description}
        <br />
        Tag: {post.tag}
      </p>
    </div>
  );
};

//--> reading from state object in redux store
const mapStateToProps = state => {
  return { post: state.selectedPost };
};

//--> connect function connect this component to the redux store and action functions so they are
//--> avaiable from props here in this component
export default connect(mapStateToProps)(PostDetail);
