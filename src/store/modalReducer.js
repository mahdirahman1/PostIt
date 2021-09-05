const initialState = {
  selectedImg: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMG":
      return { selectedImg: action.payload };

    default:
      return initialState;
  }
};

export default modalReducer;
