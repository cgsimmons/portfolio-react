import { combineReducers } from 'redux';
import { navBar } from './NavBarReducer';
import { sectionOffsets } from './SectionReducer';
import { educationActive } from './EducationReducer';

export default combineReducers({
  navBar,
  sectionOffsets,
  educationActive,
});
