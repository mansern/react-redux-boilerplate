const initialState = {
  id: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return (state = {
        ...state,
        userID: action.id
      });
    default:
      return state;
  }
};
