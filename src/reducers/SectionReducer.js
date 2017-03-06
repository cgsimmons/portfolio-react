const INITIAL_SECTIONS_STATE = {
};

export function sectionOffsets(state = INITIAL_SECTIONS_STATE, action) {
  switch (action.type) {
    case 'SET_OFFSET':
      return { ...state, [action.section]: { ...state[action.section], offset: action.offset } };
    case 'SET_ACTIVE':
      return { ...state, [action.section]: { ...state[action.section], active: action.active } };
    default:
      return state;
  }
}
