const initialState = {
  cartData: [],
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (data) => data.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export { CartReducer, initialState };
