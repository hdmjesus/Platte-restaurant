const boton = document.getElementById("icono")
const enlaces = document.getElementById("enlances")

let contador = 0

boton.addEventListener("click", toogleBtnEmpezar)



function toogleBtnEmpezar() {
    if (enlaces.classList.contains("dos")) {

        enlaces.classList.remove('dos')
        enlaces.classList.add('uno')
    } else {
        enlaces.classList.remove('uno')
        enlaces.classList.add('dos')

    }
}