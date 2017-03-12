export function setEducationActive(section, active) {
  let type = '';
  switch (section) {
    case 'bootcamp':
      type = 'SET_BOOTCAMP_ACTIVE';
      break;
    case 'ba':
      type = 'SET_BA_ACTIVE';
      break;
    case 'aas':
      type = 'SET_AAS_ACTIVE';
      break;
    default:
      break;
  }

  return {
    type,
    active,
  };
}
