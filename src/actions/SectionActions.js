export function setOffset(section, offset) {
  return {
    type: 'SET_OFFSET',
    section,
    offset,
  };
}

export function setActive(section, active) {
  return {
    type: 'SET_ACTIVE',
    section,
    active,
  };
}
