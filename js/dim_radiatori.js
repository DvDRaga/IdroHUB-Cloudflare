var calc = () => {
    var fabb = document.getElementById("fabbisogno").value
    var deltaT = document.getElementById("deltaT").value

    for (i = 0; i < 27; i++) {
        for (j = 2; j < 7; j++) {
            var nEl = document.getElementsByClassName("tesi" + j)[3 * i]
            var largBat = document.getElementsByClassName("tesi" + j)[3 * i + 1]
            var pBat = document.getElementsByClassName("tesi" + j)[3 * i + 2]

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
    document.getElementsByTagName("table")[0].scrollIntoView()
    document.getElementsByClassName("content")[0].scrollTop -= 10
    document.documentElement.style.setProperty("--headerHeight", "80px")
}
document.addEventListener("keydown", (ev) => {if (ev.keyCode === 13) calc()})