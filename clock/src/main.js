import { publish as publishAction } from './actions.js'
import Rx from 'rx'

Rx.Observable.timer(0, 500)
  .subscribe(
    () => {
      publishAction('update-clock')
    });

import clock from  './clock.tag'
export { clock };
