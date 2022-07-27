const btlogin = document.getElementById("login")
window.onload = checkLogged;
  function checkLogged(){
    if(sessionStorage.getItem("logged") == 'true') {
        window.location.assign('home.html')
    } }


btlogin.addEventListener('click', (e) =>{
var user = document.getElementById('user').value
var password = document.getElementById('contra').value
    login(user,password)
}
)

function login(user, password){
    for(var i=0; i<cuentas.length; i++){
        if(user == cuentas[i].nombre && password == cuentas[i].password){
            window.location.assign('home.html')
            sessionStorage.setItem('logged', 'true')
            sessionStorage.setItem('usuario', cuentas[i].nombre)
            sessionStorage.setItem('id', i)
            return
        }
    }
    alert('Usuario o password incorrectos')
}
 
