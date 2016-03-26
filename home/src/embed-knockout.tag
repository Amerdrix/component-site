<embed-knockout>
  <div show={this.loading} ><yield from="loading"/></div>
  <div show={this.error}><yield from="error" /></div>
  <div show={!this.loading && !this.error}><yield/></div>

  <script>
    this.loading = true;
    this.error = false;

    System
      .import(opts.src)
      .then((component) =>
      {
          component.apply(this.root)
      })
      .catch(error => {
        console.log(error)
        this.error = true;
      })
      .then(() => {
        this.loading = false;
        this.update();
      });
  </script>
</embed-knockout>
