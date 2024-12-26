$("#button").on("click", function () {
  $("#acontent").loader();

  setTimeout(function () {
    $("#acontent").loader("unload");
  }, 1000);
});
