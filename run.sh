
(cd home/; webpack-dev-server --inline --hot & webpack-dev-server --inline --hot) &
(cd clock/; webpack-dev-server --inline --hot & webpack-dev-server --inline --hot --port 8081) &
(cd account/; webpack-dev-server --inline --hot & webpack-dev-server --inline --hot --port 8082) &
(cd knockout-calculator/; webpack-dev-server --inline --hot & webpack-dev-server --inline --hot --port 8083) &
wait
