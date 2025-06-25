function renderHeader(){
    let headerContent = document.getElementById("header");
    headerContent.innerHTML = getHeaderTemplate();
}

window.addEventListener("load", () => {
  renderHeader()
});