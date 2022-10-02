var calc = () => {
    var vol = document.getElementById("volume").value
    var tMax = document.getElementById("tMax").value
    var pI = document.getElementById("pI").value
    var pF = document.getElementById("pF").value

    var vVaso = document.getElementById("vVaso")
    vVaso.innerHTML = ((vol * (0.31 + 3.9 * 0.0001 * Math.pow(tMax, 2)) / 100) / (1 - (pI / pF))).toFixed(1) + " L"

    document.getElementsByClassName("result_row")[0].style.borderColor = "rgb(85, 116, 255)"
}
document.addEventListener("keydown", (ev) => {if (ev.keyCode === 13) calc()})