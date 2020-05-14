export function setNavBarHover(hover) {
  return {
    type: "SET_HOVER",
    hover,
  };
}

export function setNavBarActive(active) {
  return {
    type: "SET_ACTIVE",
    active,
  };
}
