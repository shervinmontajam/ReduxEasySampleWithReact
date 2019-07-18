import React from 'react';
import { connect } from 'react-redux';
import {addPost} from '../actions';

const AddPost = (props)=> {
    return <button className="ui button primary" onClick={() => props.addPost()}>Add Post</button>
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ addPost })(AddPost);