import { combineReducers } from 'redux';
import { navBar } from './NavBarReducer';
import { scrollPosition } from './ScrollReducer';
import { sectionOffsets } from './SectionReducer';

export default combineReducers({
  navBar,
  scrollPosition,
  sectionOffsets,
});
