import { combineReducers } from 'redux';
import { navBar } from './NavBarReducer';
import { sectionOffsets } from './SectionReducer';

export default combineReducers({
  navBar,
  sectionOffsets,
});
