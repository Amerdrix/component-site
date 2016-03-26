import Rx from 'rx'
import Immutable from 'immutable'
import { action$ } from './actions.js'

const initalState = Immutable.Map()
const history = Immutable.List()

function applyAction(state, action, data) {
  switch (action) {
    case 'update-clock':
        var clock = state.get('clock')
        var count = clock != null ? clock.get('count') : 0
        state = state.merge(
          {clock: {
            now: new Date(),
            count: count + 1 }
          })
      break;
    default:
  }
  return state;
}

const state$ = action$
                .scan((state, action) => applyAction(state, action.action, action.data), Immutable.Map())

function get(pattern) {
  var keys = pattern.split('.');

  return state$.select(state => {

    return keys.reduce((state, key) => state != null ? state.get(key) : null, state)
  });
}

state$.get = get;
export default state$;
