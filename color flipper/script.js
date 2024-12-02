function rnd() {
    let color = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    document.getElementById("main").style.backgroundColor = color
    document.getElementById("color").textContent = color
}
rnd()
document.getElementById("btn").addEventListener("click",rnd)