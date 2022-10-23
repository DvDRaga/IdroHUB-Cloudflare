'use strict'
let calcoloRadiatori = () => {
    let fabb = document.getElementById("fabbisogno").value
    let deltaT = document.getElementById("deltaT").value
    let larghezzaMax = document.getElementById("larghezzaMax").value

    for (let i = 0; i < 27; i++) {
        for (let j = 2; j < 7; j++) {
            let nEl = document.getElementsByClassName("tesi" + j)[3 * i]
            let largBat = document.getElementsByClassName("tesi" + j)[3 * i + 1]
            let pBat = document.getElementsByClassName("tesi" + j)[3 * i + 2]

            if (data.acciaio["tesi" + j].rese[i] != undefined) {
                nEl.innerHTML = Math.ceil(fabb / (data.acciaio["tesi" + j].rese[i] * Math.pow(deltaT / 50, data.acciaio["tesi" + j].exp[i])))
                largBat.innerHTML = nEl.innerHTML * 45 + " mm"
                pBat.innerHTML = Math.floor(nEl.innerHTML * (data.acciaio["tesi" + j].rese[i] * Math.pow(deltaT / 50, data.acciaio["tesi" + j].exp[i]))) + " W"
                if (nEl.innerHTML * 45 < larghezzaMax) {
                    nEl.style.borderBottom = "2px solid rgb(54, 110, 214)"
                    largBat.style.borderBottom = "2px solid rgb(54, 110, 214)"
                    pBat.style.borderBottom = "2px solid rgb(54, 110, 214)"
                } else {
                    nEl.style.borderBottom = "2px solid white"
                    largBat.style.borderBottom = "2px solid white"
                    pBat.style.borderBottom = "2px solid white"
                }
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