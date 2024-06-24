document.getElementById("svg-object").addEventListener("load", function () {
  var svgDoc = this.contentDocument;
  var svgRoot = svgDoc.documentElement;

  // Create a group to hold the SVG content for zooming
  var g = svgDoc.createElementNS("http://www.w3.org/2000/svg", "g");

  while (svgRoot.firstChild) {
    g.appendChild(svgRoot.firstChild);
  }

  svgRoot.appendChild(g);

  var svg = d3.select(g);
  var zoom = d3
    .zoom()
    .scaleExtent([1, 10])
    .on("zoom", function (event) {
      svg.attr("transform", event.transform);
    });

  d3.select(svgRoot).call(zoom).call(zoom.transform, d3.zoomIdentity);

  var interactiveElements = svgDoc.querySelectorAll('[id^="BXL_"]');

  interactiveElements.forEach(function (element) {
    if (element) {
      var elementId = element.getAttribute("id");
      element.addEventListener("click", function () {
        showInfoPanel(elementId);
      });
    } else {
      console.error("Element not found");
    }
  });
});
