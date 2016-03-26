import riot from 'riot'

import './app.tag'
import './embed-riot.tag'

SystemJS.amdDefine('riot', [], () => {
  return riot;
});

function run() {
  riot.mount('app');
}

run();
