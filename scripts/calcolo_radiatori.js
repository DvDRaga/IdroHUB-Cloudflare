'use strict'
let calcoloRadiatori = () => {
    let fabb = document.getElementById("fabbisogno").value
    let deltaT = document.getElementById("deltaT").value

    for (let i = 0; i < 27; i++) {
        for (let j = 2; j < 7; j++) {
            let nEl = document.getElementsByClassName("tesi" + j)[3 * i]
            let largBat = document.getElementsByClassName("tesi" + j)[3 * i + 1]
            let pBat = document.getElementsByClassName("tesi" + j)[3 * i + 2]

            if (data.rad["tesi" + j].rese[i] != undefined) {
                nEl.innerHTML = Math.ceil(fabb / (data.rad["tesi" + j].rese[i] * Math.pow(deltaT / 50, data.rad["tesi" + j].exp[i])))
                largBat.innerHTML = nEl.innerHTML * 45 + " mm"
                pBat.innerHTML = Math.floor(nEl.innerHTML * (data.rad["tesi" + j].rese[i] * Math.pow(deltaT / 50, data.rad["tesi" + j].exp[i]))) + " W"
            } else {
                nEl.innerHTML = "-"
                largBat.innerHTML = "-"
                pBat.innerHTML = "-"
                largBat.style.textAlign = "center"
                pBat.style.textAlign = "center"
            }
        }
    }
    document.getElementById("radiator_table").scrollIntoView()
}