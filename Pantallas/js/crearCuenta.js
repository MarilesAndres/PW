function crearCuenta(){
    let boton = document.getElementById("btnCrea");
    let NU = document.getElementById("NU").value;
    let Contra = document.getElementById("contraseña").value;
    let Correo = document.getElementById("Email").value;
   let radioV;
    var radios = document.getElementsByName('optradio');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        radioV= radios[i].value;
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }

    console.log(NU);
    console.log(Contra);
    console.log(Correo);
    console.log(radioV);

    var req = new XMLHttpRequest();
    req.open("POST", "http://localhost:3000/user", true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(
      JSON.stringify({
        NombreUsuario: NU,
        Contraseña: Contra,
        Correo: Correo,
        PoP: radioV
      })
    );
    
}


function fetch(){
    var button = document.getElementById("btnCreaC");
    if(button){
        button.addEventListener("click",crearCuenta, false );
    }
    document.getElementById("NU").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("Email").value = "";
   
};

window.onload = fetch();