const themeReducer = (
  state: Theme,
  action:
    | {
        type: "SET_PRIMARY";
        payload: Primary;
      }
    | {
        type: "SET_BG";
        payload: Bg;
      }
): Theme => {
  switch (action.type) {
    case "SET_PRIMARY":
      return {
        ...state,
        primary: action.payload,
      };
    case "SET_BG":
      return {
        ...state,
        bg: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
