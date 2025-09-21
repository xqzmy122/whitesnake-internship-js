for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("index", i);
    }, 3000);
  })(i);
}
