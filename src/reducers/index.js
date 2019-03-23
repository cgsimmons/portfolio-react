import { combineReducers } from 'redux';
import navBar from './NavBarReducer';
import educationActive from './EducationReducer';

export default combineReducers({
  navBar,
  educationActive,
});
