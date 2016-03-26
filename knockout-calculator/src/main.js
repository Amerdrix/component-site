import ko from 'knockout'
import calc from './calculator.js'

function apply(to){
  ko.applyBindings({}, to)
}

export {apply}
