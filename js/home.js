window.onload = checkLogged;
  function checkLogged(){
    if(sessionStorage.getItem("logged") != 'true') {
        window.location.assign('index.html')
    } }
   
let usuario = sessionStorage.getItem("usuario")
document.getElementById("welcome").innerHTML = 'Bienvenido a su cajero automatico ' + usuario
let id = sessionStorage.getItem("id")
let cuenta = cuentas[id]
let saldo = cuenta.saldo
let saldoD = document.getElementById("saldoD")
let consultaD = document.getElementById("consultaSaldo")
let deposito = document.getElementById("deposito")
let retiroD = document.getElementById("retiroD")
let alerta = document.getElementById("alerta")
let succes = document.getElementById("succes")
let alerta2 = document.getElementById("alerta2")
let succes2 = document.getElementById("succes2")


let salir = document.getElementById("salir")
salir.addEventListener("click", function(){
sessionStorage.clear()
window.location.assign('index.html')
})

let consulta = document.getElementById("consulta")
let ingreso = document.getElementById("ingreso")
let retiro = document.getElementById("retiro")
let cajero = document.getElementById("cajero")

consulta.addEventListener("click", (e) =>{
    saldoD.innerText = "Su saldo actual es de "+saldo
    retiroD.style.display= 'none'
    deposito.style.display = 'none'
    succes.style.display = 'none'
    alerta.style.display = 'none'
    alerta2.style.display = 'none'
    succes2.style.display = 'none'
    consultaD.style.display = 'block'
})

ingreso.addEventListener('click', (e) =>{
    retiroD.style.display= 'none'
    consultaD.style.display = 'none'
    alerta2.style.display = 'none'
    succes2.style.display = 'none'
    deposito.style.display = 'block'

})

retiro.addEventListener('click', (e) =>{
    consultaD.style.display = 'none'
    deposito.style.display = 'none'
    succes.style.display = 'none'
    alerta.style.display = 'none'
    retiroD.style.display= 'block'
})

let bt_deposito = document.getElementById("bt-deposito")
let bt_retiro = document.getElementById("bt-retiro")



bt_deposito.addEventListener('click', (e) =>{
    let monto = parseInt(document.getElementById("monto1").value) 
    let newSaldo
    document.getElementById("monto1").value = ""
if(monto>0){
    newSaldo= saldo+monto
    
 if(newSaldo<=990){
    saldo = newSaldo
    alerta.style.display = 'none'
    succes.style.display = 'block'
    succes.innerText = "Deposito realizado con exito"
 }
 else{
    alerta.style.display = 'block'
    alerta.innerText = "No puede tener un saldo mayor a 990"
    succes.style.display = 'none'
 }
}
else{
    alerta.style.display = 'block'
    alerta.innerText = "Por favor ingrese un numero valido"
    succes.style.display = 'none'
}
})


bt_retiro.addEventListener('click', (e) =>{
    let monto = parseInt(document.getElementById("monto2").value) 
    let newSaldo
    document.getElementById("monto2").value = ""
if(monto>0){
    newSaldo= saldo-monto
 if(newSaldo>=10){
    saldo = newSaldo
    alerta2.style.display = 'none'
    succes2.style.display = 'block'
    succes2.innerText = "Retiro realizado con exito"
 }
 else{
    alerta2.style.display = 'block'
    alerta2.innerText = "No puede tener un saldo menor a 10"
    succes2.style.display = 'none'
 }
}
else{
    alerta2.style.display = 'block'
    alerta2.innerText = "Por favor, ingrese un numero valido"
    succes2.style.display = 'none'
}
    
})