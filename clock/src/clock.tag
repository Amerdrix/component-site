import riot from 'riot'
<clock>
  <span>{this.now} </span>

  const self = this;
  function updateTime() {
    self.now = (new Date()).toLocaleTimeString();
    self.update();
  }
  setInterval(updateTime, 500);
  updateTime();

</clock>
