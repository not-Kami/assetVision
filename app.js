document.getElementById('svg-object').addEventListener('load', function() {
    var svgDoc = this.contentDocument;
    var svgRoot = svgDoc.documentElement;
  
    // Create a group to hold the SVG content for zooming
    var g = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'g');
  
    // Move all child elements of the root to the new group
    while (svgRoot.firstChild) {
      g.appendChild(svgRoot.firstChild);
    }
    
    // Append the new group to the root
    svgRoot.appendChild(g);
  
    // Add zoom and pan functionality using D3.js
    var svg = d3.select(g);
    var zoom = d3.zoom()
                 .scaleExtent([1, 10])
                 .on('zoom', function(event) {
                   svg.attr('transform', event.transform);
                 });
  
    d3.select(svgRoot)
      .call(zoom)
      .call(zoom.transform, d3.zoomIdentity);  // Initialize the zoom identity to avoid initial disappearance
  
    // Find all elements with IDs starting with 'BXL_'
    var interactiveElements = svgDoc.querySelectorAll('[id^="BXL_"]');
  
    interactiveElements.forEach(function(element) {
      var elementId = element.getAttribute('id');
      element.addEventListener('click', function() {
        showInfoPanel(elementId);
      });
    });
  });
  
  function showInfoPanel(elementId) {
    var infoPanel = document.getElementById('info-panel');
    var infoContent = document.getElementById('info-content');
    
    // Populate the info panel with content related to the clicked element
    infoContent.innerHTML = `<h2>Informations sur ${elementId}</h2><p>Contenu détaillé pour ${elementId}.</p>`;
    
    // Open the info panel
    infoPanel.classList.add('open');
  }
  
  // Close button functionality
  document.getElementById('close-btn').addEventListener('click', function() {
    var infoPanel = document.getElementById('info-panel');
    infoPanel.classList.remove('open');
  });
  