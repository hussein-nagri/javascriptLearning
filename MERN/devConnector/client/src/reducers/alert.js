//function that takes in state, and dispatches action
import { SET_ALERT, REMOVE_ALERT } from '../actions/types'
const initialState = [
];


export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload]; //we need all of the states already there, cuz state is immutable
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload) //payload is just ID, returns everything but the one being removed
    default:
      return state;

  }
}