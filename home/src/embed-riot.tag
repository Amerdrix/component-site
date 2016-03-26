<embed-riot>
  <div show={!this.error} ><yield from="loading"/></div>
  <div show={this.error}><yield from="error" /></div>

  <script>
    System
      .import(opts.src)
      .then(() =>
      {
        riot.mount(this.root, opts.tag, opts);
      })
      .catch(error => {
        console.log(error);
        this.error = true;
        this.update();
      });

  </script>

</embed-riot>
