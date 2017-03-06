const INITIAL_SECTIONS_STATE = {
  Home: 0,
};

export function sectionOffsets(state = INITIAL_SECTIONS_STATE, action) {
  switch (action.type) {
    case 'SET_OFFSET':
      return { ...state, [action.section]: action.offset };
    default:
      return state;
  }
}
