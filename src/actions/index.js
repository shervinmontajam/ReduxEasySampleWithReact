export const addPost = () => {
  return {
    type : 'ADD_POST',
    payload : {title:'New One!', description:'more about new one!', tag:'#newone'}
  }
}

export const selectPost = post => {
    // Return an action
    return {
      type: 'POST_SELECTED',
      payload: post
    };
  };