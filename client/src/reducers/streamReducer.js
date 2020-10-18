export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "UPDATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      console.log(action.payload, state);
      let { [action.payload]: omit, ...newState } = state;
      console.log(newState);
      return newState;
    case "FETCH_STREAMS":
      let obj = action.payload.reduce((acc, stream) => {
        let { id } = stream;
        return { ...acc, [id]: stream };
      }, {});
      return { ...state, ...obj };
    default:
      return state;
  }
};
