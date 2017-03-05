const INITIAL_SCROLL_STATE = {
  offset: 0,
};

export function scrollPosition(state = INITIAL_SCROLL_STATE, action) {
  switch (action.type) {
    case 'SET_SCROLL_OFFSET':
      return { ...state, offset: action.offset };
    default:
      return state;
  }
}
