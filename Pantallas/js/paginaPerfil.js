function editar(){
    var IDE = localStorage.getItem("ID");
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/user/${IDE}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            
            parse.forEach((k, v) => {
                console.log(`${k.NombreUsuario}`);
                console.log(`${v}`);
                document.getElementById("nombreE").value = k.NombreUsuario;
                document.getElementById("correoE").value = k.Correo;
                document.getElementById("contrasenaE").value = k.Contraseña;
                if(k.PoP.data[0] == 1)
                {
                    document.getElementById("publicoE").checked  = true;
                    document.getElementById("privadoE").checked = false;
                }
                else{
                    document.getElementById("publicoE").checked  = false;
                    document.getElementById("privadoE").checked = true;
                }
               
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
}

function EditarInfo()
{
    var IDedit = localStorage.getItem("ID");
    let NU =     document.getElementById("nombreE").value;
    let Contra = document.getElementById("contrasenaE").value
    let Correo = document.getElementById("correoE").value;
   let radioPop;
   if(document.getElementById("publicoE").checked == true)
   {
        radioPop = 1;
   }
   else{
       radioPop = 0;
   }
    

    console.log(NU);
    console.log(Contra);
    console.log(Correo);
    console.log(radioPop);

    var req = new XMLHttpRequest();
    req.open("POST", "http://localhost:3000/editar", true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(
      JSON.stringify({
        NombreUsuario: NU,
        Contraseña: Contra,
        Correo: Correo,
        PoP: radioPop,
        IdUsuario: IDedit
      })
    );

    onclick = location.reload();
}


function fetch(){
    var ID = localStorage.getItem("ID");
    var button = document.getElementById("editar");
    if(button){
        button.addEventListener("click",editar, false );
    }

    var buttonE = document.getElementById("Editadito");
    if(buttonE){
        buttonE.addEventListener("click",EditarInfo, false );
    }

    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/user/${ID}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            
            parse.forEach((k, v) => {
                console.log(`${k.NombreUsuario}`);
                console.log(`${v}`);
                document.getElementById("usuario").innerHTML = k.NombreUsuario;
                document.getElementById("Nombre").innerHTML = k.NombreUsuario;
                document.getElementById("Correo").innerHTML = k.Correo;
                if(k.PoP.data[0] == 1)
                {
                    document.getElementById("PoP").innerHTML = "Publico";
                }
                else{
                    document.getElementById("PoP").innerHTML = "Privado";
                }
               
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
};

window.onload = fetch();