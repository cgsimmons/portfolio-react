const INITIAL_EDUCATION_STATE = {
  bootcamp: false,
  ba: false,
  aas: false,
};

export default function educationActive(
  state = INITIAL_EDUCATION_STATE,
  action
) {
  switch (action.type) {
    case 'TOGGLE_BOOTCAMP_ACTIVE':
      return { ...state, bootcamp: !state.bootcamp };
    case 'TOGGLE_BA_ACTIVE':
      return { ...state, ba: !state.ba };
    case 'TOGGLE_AAS_ACTIVE':
      return { ...state, aas: !state.aas };
    default:
      return state;
  }
}
