import { 
  CHANGE_TEXT
 } from '../actions/testPage';

const initalState = {
  text:''
}

export default (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
        return  {...state, ...action.payload};
    default:
      return state;
  }
};
