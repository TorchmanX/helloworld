import * as t from '../actionTypes';

const assign = Object.assign || require('object.assign');

const initStatus = {
  loading: false,
};

export default function reducer(state=initStatus, action) {

  switch(action.type) {
    /*
    case t.ACTION: {
      return assign({}, state, {
      });
    }
    */
  }
  return state;
}
