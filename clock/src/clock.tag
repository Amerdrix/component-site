import state$ from './state.js'

<clock>
  <span> {this.now} ({this.updates})</span>

  <script>
  this.now = ''
  this.updates = 0;

  state$.get('clock').subscribe(clock => {

    if(clock)
    {
      this.updates = clock.get('count');
      this.now = clock.get('now').toLocaleTimeString()
      this.update()
    }

  })
  </script>
</clock>
