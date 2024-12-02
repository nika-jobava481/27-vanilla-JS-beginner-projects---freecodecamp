let count = 0

function set() {
    document.getElementById("num").textContent = count
}

set()


document.getElementById("decrease").addEventListener("click", function () {
    count--
    set()
})
document.getElementById("reset").addEventListener("click", function () {
    count = 0
    set()
})
document.getElementById("increase").addEventListener("click", function () {
    count++
    set()
})

