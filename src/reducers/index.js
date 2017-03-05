import { combineReducers } from 'redux';
import { navBar } from './NavBarReducer';
import { scrollPosition } from './ScrollReducer';

export default combineReducers({
  navBar,
  scrollPosition,
});
