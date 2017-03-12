const INITIAL_EDUCATION_STATE = {
  bootcamp: false,
  ba: false,
  aas: false,
};

export function educationActive(state = INITIAL_EDUCATION_STATE, action) {
  switch (action.type) {
    case 'SET_BOOTCAMP_ACTIVE':
      return { ...state, bootcamp: action.active };
    case 'SET_BA_ACTIVE':
      return { ...state, ba: action.active };
    case 'SET_AAS_ACTIVE':
      return { ...state, aas: action.active };
    default:
      return state;
  }
}
