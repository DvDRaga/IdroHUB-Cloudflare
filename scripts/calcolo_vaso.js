'use strict'
let calcoloVaso = () => {
    let vol = document.getElementById("volume").value
    let tMax = document.getElementById("tMax").value
    let pI = document.getElementById("pI").value
    let pF = document.getElementById("pF").value

    let vVaso = document.getElementById("vVaso")
    vVaso.innerHTML = ((vol * (0.31 + 3.9 * 0.0001 * Math.pow(tMax, 2)) / 100) / (1 - (pI / pF))).toFixed(1)

    document.getElementsByClassName("result_row_container")[0].style.borderColor = "rgb(54, 110, 214)"
}