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
        for (let i = 0; i < allPokemons.length; i++) {
    const cardHTML = getMiniCardTemplate(allPokemons[i]);
    miniCardContent.innerHTML += cardHTML;
  }

  
}

window.addEventListener("load", async () => {
  renderHeader();
  renderFooter();
  await loadInitPokemons();  // wichtig: Warten bis geladen
  renderMiniCard();          // dann anzeigen
});
