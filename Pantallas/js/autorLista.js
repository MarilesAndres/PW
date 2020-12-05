$(document).click(function(event) {
    var text = $(event.target).text();
    localStorage.setItem("nombreLista", text);
  });
  
  $("#ListasUsuario").on("click", "a", function (event) {
   window.location.href='verListas.html';
  });


function fetch(){
  
    var ID = localStorage.getItem("ID");
    var req0 = new XMLHttpRequest();
    req0.open("GET",`http://localhost:3000/user/${ID}`, true);
    req0.onreadystatechange = function (data) {
        if (req0.readyState == 4 && req0.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            
            parse.forEach((k, v) => {
                console.log(`${k.NombreUsuario}`);
                console.log(`${v}`);
                document.getElementById("usuario").innerHTML = k.NombreUsuario;
                
            });
        }
        else{
            console.log("hola");
        }
    }
    req0.send();

    var nombre = localStorage.getItem("AutorVer");
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/verAutorLista/${nombre}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            
            parse[0].forEach((k, v) => {
                console.log(`${k.NombreUsuario}`);
                console.log(`${v}`);
                document.getElementById("Nombre").innerHTML = k.NombreUsuario;
                document.getElementById("Correo").innerHTML = k.Correo;
               localStorage.setItem("AUtorVerLista", k.IdUsuario);
              
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

  
        var IDautor = localStorage.getItem("AUtorVerLista");
        var req2 = new XMLHttpRequest();
        req2.open("GET",`http://localhost:3000/verListaUsuarioP/${nombre}`, true);
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
                        </div>
                      </div>
                    </div>
                  </div>`)
                    
                });
            }
            else{
                console.log("hola");
            }
        }
        req2.send();   
    
   
}


window.onload = fetch();