import Rx from 'rx'

const subject = new Rx.Subject();

function publish(action, data) {
  subject.onNext({action, data})
}

export {
    publish,
    subject as action$
 };
