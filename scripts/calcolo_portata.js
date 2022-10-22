'use strict'
let calcoloPortata = () => {
    let pot = document.getElementById("potenza").value
    let deltaT = document.getElementById("deltaT").value

    let portata = document.getElementById("portata")
    portata.innerHTML = (pot / (deltaT * 1.163)).toFixed(1)

    document.getElementsByClassName("result_row_container")[0].style.borderColor = "rgb(54, 110, 214)"
}