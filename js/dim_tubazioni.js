var calc = () => {
    var port = document.getElementById("portata").value
    var temp = document.getElementById("temperatura").value
    var ind = data.acqua.temp.indexOf(Number(temp))
    
    for (i = 0; i < 9; i++) {
        var perdCell = document.getElementsByTagName("td")[i * 2]
        var velCell = document.getElementsByTagName("td")[i * 2 + 1]

        var perd = 14.7 * Math.pow(data.acqua.visc[ind], 0.25) * data.acqua.dens[ind] * Math.pow(port, 1.75) / Math.pow(data.diamTub[i], 4.75)
        perdCell.innerHTML = Math.ceil(perd) + " mm/m"
        var vel = port / (Math.PI * Math.pow(data.diamTub[i], 2) * 3.6 / 4)
        velCell.innerHTML = vel.toFixed(2) + " m/s"
    }
    document.getElementsByTagName("table")[0].scrollIntoView()
    document.getElementsByClassName("content")[0].scrollTop -= 10
}
document.addEventListener("keydown", (ev) => {if (ev.keyCode === 13) calc()})