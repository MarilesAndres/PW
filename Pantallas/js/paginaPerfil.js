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
    if(NU==""||Contra==""||Correo==""){
        alert("Te falto un campo");
      }else{
        //poner lo otro
    }
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

$(document).click(function(event) {
    var text = $(event.target).text();
    localStorage.setItem("nombreLista", text);
  });
  
  $("#ListasUsuario").on("click", "a", function (event) {
   window.location.href='verListas.html';
  });

  
function editadito(){
    alert("editar");
    let TIT = document.getElementById("TT").value
    let DESC = document.getElementById("DD").value;
    let id = document.getElementById('idE').value;
    if(TIT==""||DESC==""){
        alert("Te falto un campo");
      }else{
        //poner lo otro
    }
   let radioPop;
   if(document.getElementById("P1").checked == true)
   {
        radioPop = 1;
   }
   else{
       radioPop = 0;
   }

   var req = new XMLHttpRequest();
   req.open("POST", "http://localhost:3000/EditaLista", true);
   req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   req.send(
     JSON.stringify({
        _IdLista: id,
        _NombreLista: TIT,
        _Descripcion: DESC,
        _PrivPub: radioPop,
     })
   );

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

    var buttonEditar = document.getElementById("EditaditoListita");
    if(buttonEditar)
    {
        buttonEditar.addEventListener("click",editadito, false );
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


    var req2 = new XMLHttpRequest();
    req2.open("GET",`http://localhost:3000/verListaUsuario/${ID}`, true);
    req2.onreadystatechange = function (data) {
        if (req2.readyState == 4 && req2.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);

            
            parse[0].forEach((k, v) => {
                if(k.PrivPub.data[0] == 1)
                {
                   var pop = "Publico";
                }
                else{
                    var pop = "Privado";
                }
                $("#ListasUsuario").prepend(`<div class="card mb-3" style="max-width: 840px;"  id="carta">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" >${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small class="text-muted">${pop}</small></p>
                      <p class="card-text"><small class="text-muted" id="idl${k.IdLista}">${k.IdLista}</small></p>
                    </div>
                    <button  class="btn btn-warning" id="edita${k.IdLista}">Editar</button>
                    <button  class="btn btn-danger" id="elimina${k.IdLista}">Eliminar</button>
                  </div>
                 
                </div>
              </div>`)

              $("#ListasUsuario").on("click", `#elimina${k.IdLista}`, function (event) {
      
                var id= document.getElementById(`idl${k.IdLista}`).innerHTML;
           
                var req = new XMLHttpRequest();
               req.open("POST", "http://localhost:3000/borrarLista", true);
               req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               req.send(
                 JSON.stringify({
                   _IdLista: id
                 })
               );
           
               window.location.href='paginaPerfil.html';
               alert('no mms')
              
              });

              $("#ListasUsuario").on("click", `#edita${k.IdLista}`, function (event) {
      
                var id= document.getElementById(`idl${k.IdLista}`).innerHTML;
                id = parseInt(id);
                var req = new XMLHttpRequest();
                req.open("GET",`http://localhost:3000/verListaId/${id}`, true);
                req.onreadystatechange = function (data) {
                    if (req.readyState == 4 && req.status == 200) {
                        var datos = data.target.response;
                        console.log(datos);
                        var parse = JSON.parse(datos);
                        
                        parse[0].forEach((k, v) => {
                            document.getElementById("TT").value = k.NombreLista;
                            document.getElementById("DD").value = k.Descripcion;
                            document.getElementById('idE').value = k.IdLista;
                            if(k.privPub.data[0] == 1)
                            {
                                document.getElementById("P1").checked  = true;
                                document.getElementById("P2").checked = false;
                            }
                            else{
                                document.getElementById("P2").checked  = true;
                                document.getElementById("P1").checked = false;
                            }
                           
                        });
                    }
                    else{
                        console.log("hola");
                    }
                }
                req.send();

           
                $("#modalEdit").modal("show");
              
              });
                
            });
        }
        else{
            console.log("hola");
        }
    }
    req2.send();
};

window.onload = fetch();