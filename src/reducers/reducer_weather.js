import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; // [ city, city, city] NOT [ city, [city, city]]
      //the above is ES6 syntax that is very similar to below. One difference is the new city will be
      //in front of the array

      //return state.concat([action.payload.data]); //do no use push because it manipulate the state

  }
  return state;
}
