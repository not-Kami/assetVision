document.getElementById("zoom-in").addEventListener("click", function () {
  var svg = d3.select("g");
  svg.transition().duration(500).call(d3.zoom().scaleBy, 1.2);
});

document.getElementById("zoom-out").addEventListener("click", function () {
  var svg = d3.select("g");
  svg.transition().duration(500).call(d3.zoom().scaleBy, 0.8);
});
