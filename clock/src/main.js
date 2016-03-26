import clock from  './clock.tag'

import { publish as publishAction, action$} from './actions.js'
import publishState from './state.js'
import state$ from './state.js'
import Immutable from 'immutable'

import Rx from 'rx'


Rx.Observable.timer(0, 100)
  .subscribe(() => {
    publishAction('update-clock')
  })

export { clock };
