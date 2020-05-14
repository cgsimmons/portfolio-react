export default function toggleEducationActive(section) {
  let type = "";
  switch (section) {
    case "bootcamp":
      type = "TOGGLE_BOOTCAMP_ACTIVE";
      break;
    case "ba":
      type = "TOGGLE_BA_ACTIVE";
      break;
    case "aas":
      type = "TOGGLE_AAS_ACTIVE";
      break;
    default:
      break;
  }

  return {
    type,
  };
}
