function renderHeader(pokemon){
    let headerContent = document.getElementById("header");
    headerContent.innerHTML = getHeaderTemplate();
}

function renderFooter(){
    let footerContent = document.getElementById("footer");
    footerContent.innerHTML = getFooterTemplate();
}

function renderMiniCard(){
    let miniCardContent = document.getElementById("mini-card-content");
    miniCardContent.innerHTML = "";
  
      
        miniCardContent.innerHTML += getMiniCardTemplate();
  
}

window.addEventListener("load", () => {
  renderHeader();
  renderFooter();
  renderMiniCard();
});