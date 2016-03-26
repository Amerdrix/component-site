import Rx from 'rx'
import Immutable from 'immutable'
import { action$ } from './actions.js'

const initalState = Immutable.Map()

function applyAction(state, action, data) {
  switch (action) {
    case 'update-clock':
        state = state.merge({clock: {now: new Date()}})
      break;
    default:
  }
  return state;
}


const state$ =
  action$
    .scan((s, a) => applyAction(s, a.action, a.data), Immutable.Map())

function get(pattern) {
  var keys = pattern.split('.');

  return state$.select(state => {

    return keys.reduce((state, key) => state != null ? state.get(key) : null, state)
  });
}

state$.get = get;
export default state$;
