const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.product !== action.payload);
    default:
      return state;
  }
};

export default orderReducer;

// Notes : Untuk delete reducer sudah bisa delete namun masih ke delete semua item ketika di click
