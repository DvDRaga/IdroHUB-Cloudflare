'use strict'
let calcoloTubazioni = () => {
    let port = document.getElementById("portata").value
    let temp = document.getElementById("temperatura").value
    let ind = data.acqua.temp.indexOf(Number(temp))

    for (let i = 0; i < 9; i++) {
        let perdCell = document.getElementsByTagName("td")[i * 2]
        let velCell = document.getElementsByTagName("td")[i * 2 + 1]

        let perd = 14.7 * Math.pow(data.acqua.visc[ind], 0.25) * data.acqua.dens[ind] * Math.pow(port, 1.75) / Math.pow(data.diamTub[i], 4.75)
        perdCell.innerHTML = Math.ceil(perd) + " mm/m"
        let vel = port / (Math.PI * Math.pow(data.diamTub[i], 2) * 3.6 / 4)
        velCell.innerHTML = vel.toFixed(2) + " m/s"
    }
    document.getElementsByTagName("table")[0].scrollIntoView()
}