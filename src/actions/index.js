export const addPost = post => {
  return {
    type : 'ADD_POST',
    payload : post
  }
}

export const selectPost = post => {
    // Return an action
    return {
      type: 'POST_SELECTED',
      payload: post
    };
  };