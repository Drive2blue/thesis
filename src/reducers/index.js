import { combineReducers } from 'redux';
import photoReducer from "./photoReducer.js"
import navReducer from "./navReducer.js"
import {reducerPast, reducerFuture} from "./destinationsReducer.js"
import blogs from "./blogReducer";
import location from "./locationReducer";
import locationBasicInfo from "./locationBasicInfoReducer";
import headerSetting from "./headerReducer";
import { pointsOfInterest, attractions } from "./searchReducer";
// import photoReducer from "./photoReducer"; -- currently an empty reducer
// import navReducer from "./navReducer";

// use map, filter, Object.assign() and array destructuring to
// return new version of state!
// No mutations!

const rootReducer = combineReducers({
  location,
  locationBasicInfo,
  attractions,
  pointsOfInterest,
  blogs,
  headerSetting
  // photos
  // destinations
  // userId
});

export default rootReducer;

// photos: photoReducer,
// navFlag: navReducer,
// Below are placeholders and need to be updated. A reducer needs to be defined for each item in the store or else it will throw an error
// currentText: (state = {}) => state,
// countries: (state = {}) => state,
// location: (state = {}) => state,
// photos: (state = {}) => state,
// destinations: (state = {}) => state
// blogs: blogReducer,
// photos: photoReducer,
// navFlag: navReducer,
// destinationsFuture: reducerPast, 
// destinationsPast: reducerFuture,