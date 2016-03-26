import './embed-riot.tag'
import './embed-knockout.tag'

<app>
  <h1>Demo app</h1>
  <header>

    <embed-riot class="clock" tag='clock' src='http://localhost:8081/clock.js'>
      <yield to="loading">Clock is loading, it's so slow...</yield>
      <yield to="error">Oh noes, could not load clock ....</yield>
    </embed-riot>

    <embed-riot class="account" tag='account' src='http://localhost:8082/account.js'>
      <yield to="loading">Account is loading, it's so slow...</yield>
      <yield to="error">Oh noes, could not load account ....</yield>
    </embed-riot>
  </header>

  <div class='clearfix'>
    <embed-knockout src="http://localhost:8083/ko-calculator.js">
      <yield to="loading">Knockout component is loading</yield>
      <yield to="error">Error loading Knockout component</yield>
      <ko-calculator></ko-calculator>
    </embed-knockout>
  </div>

  <style scoped>
      h1 {float: left;}
     .account {float: right;}
     .clock { position: fixed; bottom: 0; right: 0;}

     .clearfix { clear: both;}
  </style>



</app>
