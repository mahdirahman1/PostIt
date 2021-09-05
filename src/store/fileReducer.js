const initialState = {
  file: null,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET":
      return { file: action.payload };

    default:
      return initialState;
  }
};

export default fileReducer;
