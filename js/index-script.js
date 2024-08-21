function cargarcabecera(){
    fetch('/html/menu.html')
    .then (response => response.text())
    .then(data => {
        document.getElementById('cabecera-menu').innerHTML = data;
    }).catch(error => console.log("error al cargar el html:", error))

}

cargarcabecera();
