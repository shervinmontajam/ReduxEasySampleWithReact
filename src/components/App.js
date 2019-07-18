import React from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import AddPost from './AddPost';

class App extends React.Component{

    render() {
            return (    
            <div className="ui container grid">
            <div className="ui row">
              <div className="column five wide">
                    <h3>Add to post form</h3>
                    <AddPost />
              </div>
              <div className="column five wide">
                  <h3>List of the form with select and delete actions</h3>
                  <PostList />
              </div>
              <div className="column six wide">
                  <h3>post detail</h3>
                  <PostDetail />
              </div>
            </div>
          </div>);
    }

}

export default App;