function showInfoPanel(elementId) {
  var infoPanel = document.getElementById("info-panel");
  var infoContent = document.getElementById("info-content");

  infoContent.innerHTML = `<div class="info-title">Informations sur ${elementId}</div><div class="info-content">Contenu détaillé pour ${elementId}.</div>`;
  infoPanel.classList.add("open");
}

document.getElementById("close-btn").addEventListener("click", function () {
  var infoPanel = document.getElementById("info-panel");
  infoPanel.classList.remove("open");
});
