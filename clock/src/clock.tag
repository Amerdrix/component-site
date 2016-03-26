import state$ from './state.js'

<clock>
  <span> {this.now} </span>

  <script>
  this.now = 'Clock is un-initialized'
  state$.get('clock.now').subscribe(now => {
    if(now)
    {
      this.now = now.toLocaleTimeString()
      this.update()
    }

  })
  </script>

</clock>
