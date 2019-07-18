import { combineReducers } from 'redux';

const temp = [
  { title: 'MongoDB advance concepts', description: 'more about monogodb advanced concept', tag : '#mongodb' },
  { title: 'C# generics', description: 'more abour C# generics', tag:'#C#' },
  { title: 'React and redux', description: 'more about react and redux', tag:'#react' },
  { title: 'Axure functions', description: 'more about axure functions', tag:'#azure' }
];

const postListReducer = (state = temp, action) => {
  if(action.type === 'ADD_POST'){
    return [...state, action.payload]
  } 
  return state;
};

const selectedPostReducer = (selectedPost = null, action) => {
  if (action.type === 'POST_SELECTED') {
    return action.payload;
  }

  return selectedPost;
};

//--> creating objects in the redux store. the name of the objects there in redux store are defined here
//--> as songs, selectSong
export default combineReducers({
  postList: postListReducer,
  selectedPost: selectedPostReducer
});