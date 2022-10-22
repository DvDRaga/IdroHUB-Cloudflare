'use strict'
let calcoloTempoRegime = () => {
    let pot = document.getElementById("potenza").value
    let deltaT = document.getElementById("deltaT").value
    let volume = document.getElementById("volume").value

    let tempoRegime = document.getElementById("tempoRegime")
    let tempo = (volume * deltaT * 1.163 / pot)
    // tempoRegime.innerHTML = Math.floor(tempo) + " ORA/E E " + ((tempo % 1) * 60).toFixed(0) + " MIN"
    tempoRegime.innerHTML = String(Math.floor(tempo)).padStart(2, "0") + ":" + String(((tempo % 1) * 60).toFixed(0)).padStart(2, "0")

    document.getElementsByClassName("result_row_container2")[0].style.borderColor = "rgb(54, 110, 214)"
}