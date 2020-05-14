const INITIAL_NAVBAR_STATE = {
  hovering: false,
  active: "Home",
};

export default function navBar(state = INITIAL_NAVBAR_STATE, action) {
  switch (action.type) {
    case "SET_HOVER":
      return { ...state, hovering: action.hover };
    case "SET_ACTIVE":
      return { ...state, active: action.active };
    default:
      return state;
  }
}
