const INITIAL_NAVBAR_STATE = {
  hovering: false,
};

export function navBar(state = INITIAL_NAVBAR_STATE, action) {
  switch (action.type) {
    case 'SET_HOVER':
      return { ...state, hovering: action.hover };
    default:
      return state;
  }
}
