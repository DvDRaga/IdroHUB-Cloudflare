'use strict'
let calcoloSezioneAria = () => {
    let forma = document.getElementById("forma").value
    let latoFisso = document.getElementById("latoFisso").value
    let portata = document.getElementById("portata").value
    let maxV = document.getElementById("maxV").value

    let sez = document.getElementById("sezione")
    if (forma === "circ") sez.innerHTML = Math.ceil(2 * Math.sqrt(portata / 3600) / Math.sqrt(Math.PI * maxV) * 1000)
    if (forma === "rett") sez.innerHTML = Math.ceil(portata / (3600 * maxV * (latoFisso / 1000)) * 1000)

    document.getElementsByClassName("result_row_container")[0].style.borderColor = "rgb(54, 110, 214)"
}
let cambioForma = () => {
    let forma = document.getElementById("forma").value

    if (forma === "circ") {
        document.getElementById("container_latoFisso").classList.add("hidden")
        document.querySelector(".result_row_container>p:nth-child(1)").innerHTML = "DIAMETRO"
    }
    if (forma === "rett") {
        document.getElementById("container_latoFisso").classList.remove("hidden")
        document.querySelector(".result_row_container>p:nth-child(1)").innerHTML = "LATO"
    }
}