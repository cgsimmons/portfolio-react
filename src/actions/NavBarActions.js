export function setNavBarHover(hover) {
  return {
    type: 'SET_HOVER',
    hover,
  };
}

export function setActive(active) {
  return {
    type: 'SET_ACTIVE',
    active,
  };
}
