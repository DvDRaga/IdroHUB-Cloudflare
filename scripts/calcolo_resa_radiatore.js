'use strict'
let cambioTipologia = () => {
    let tipo = document.getElementById("tipologia").value

    let colonne = document.getElementById("colonne")

    let tempColonne
    switch (tipo) {
        case "acciaio":
            for(let i = 2; i < 7; i++) {
                tempColonne += "<option value=" + i + ">" + i + "</option>"
                colonne.innerHTML = tempColonne
            }
            break
        case "ghisa":
            for(let i = 2; i < 9; i += 2) {
                if (i === 8) { tempColonne += "<option value=" + 9 + ">" + 9 + "</option>" }
                else { tempColonne += "<option value=" + i + ">" + i + "</option>" }
                colonne.innerHTML = tempColonne
            }
            break
        case "alluminio":
            colonne.innerHTML = "<option value=''>-</option>"
            break
        case "piastra":
            for(let i = 2; i < 6; i++) {
                tempColonne += "<option value=" + i + ">" + i + "</option>"
                colonne.innerHTML = tempColonne
            }
            break
    }
    cambioColonne()
}
let cambioColonne = () => {
    let tipo = document.getElementById("tipologia").value
    let colonne = document.getElementById("colonne").value

    let altezza = document.getElementById("altezza")

    let tempAltezza
    switch (tipo) {
        case "acciaio":
            data.acciaio["tesi" + colonne].rese.forEach((el, i) => {
                if (el != undefined) tempAltezza += "<option value=" + data.acciaio.altezze[i] + ">" + data.acciaio.altezze[i] + "</option>"
            })
            altezza.innerHTML = tempAltezza
            break
        case "ghisa":
            data.ghisa["col" + colonne].altezze.forEach((el) => { tempAltezza += "<option value=" + el + ">" + el + "</option>" })
            altezza.innerHTML = tempAltezza
            break
        case "alluminio":
            data.alluminio.altezze.forEach((el) => { tempAltezza += "<option value=" + el + ">" + el + "</option>" })
            altezza.innerHTML = tempAltezza
            break
        case "piastra":
            data.piastra["col" + colonne].altezze.forEach((el) => { tempAltezza += "<option value=" + el + ">" + el + "</option>" })
            altezza.innerHTML = tempAltezza
            break    
    }
}
let calcoloResaRadiatore = () => {
    let tipo = document.getElementById("tipologia").value
    let colonne = document.getElementById("colonne").value
    let altezza = document.getElementById("altezza").value
    let elements = document.getElementById("elements").value
    let deltaT = document.getElementById("deltaT").value

    let resa = document.getElementById("resa")
    let i
    switch (tipo) {
        case "acciaio":
            i = data.acciaio.altezze.indexOf(Number(altezza))
            resa.innerHTML = Math.floor(elements * (data.acciaio["tesi" + colonne].rese[i] * Math.pow(deltaT / 50, data.acciaio["tesi" + colonne].exp[i])))
            break
        case "ghisa":
            i = data.ghisa["col" + colonne].altezze.indexOf(Number(altezza))
            resa.innerHTML = Math.floor(elements * (data.ghisa["col" + colonne].rese[i] * Math.pow(deltaT / 50, data.ghisa["col" + colonne].exp[i])))
            break
        case "alluminio":
            i = data.alluminio.altezze.indexOf(Number(altezza))
            resa.innerHTML = Math.floor(elements * (data.alluminio.rese[i] * Math.pow(deltaT / 50, data.alluminio.exp[i])))
            break
        case "piastra":
            i = data.piastra["col" + colonne].altezze.indexOf(Number(altezza))
            resa.innerHTML = Math.floor(elements * (data.piastra["col" + colonne].rese[i] * Math.pow(deltaT / 50, data.piastra["col" + colonne].exp[i])))
            break
    }
    document.getElementsByClassName("result_row_container")[0].style.borderColor = "rgb(54, 110, 214)"
}