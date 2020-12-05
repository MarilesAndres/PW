function buscarL(){
   
    let busca = document.getElementById("buscar").value;
    

    $("#Listas").empty();
   
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/busqueda/${busca}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            let listas = 1;
            parse[0].forEach((k, v) => {
                
                    $( "#Listas" ).prepend( `<div class="card mb-3" style="max-width: 840px;"  id="carta1" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" id="verLista${listas}">${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small id="Autor">Autor: ${k.NombreUsuario}</small></p>
                    </div>
                  </div>
                </div>
              </div>` );
               listas ++;
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
    
}

function buscarPS(){
   
    let busca = "PlayStation"
    $("#Listas").empty();
   
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/busqueda/${busca}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            let listas = 1;
            parse[0].forEach((k, v) => {
                
                    $( "#Listas" ).prepend( `<div class="card mb-3" style="max-width: 840px;"  id="carta1" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" id="verLista${listas}">${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small id="Autor">Autor: ${k.NombreUsuario}</small></p>
                    </div>
                  </div>
                </div>
              </div>` );
               listas ++;
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
    
}

function buscarXB(){
   
    let busca = "XBOX"
    $("#Listas").empty();
   
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/busqueda/${busca}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            let listas = 1;
            parse[0].forEach((k, v) => {
                
                    $( "#Listas" ).prepend( `<div class="card mb-3" style="max-width: 840px;"  id="carta1" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" id="verLista${listas}">${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small id="Autor">Autor: ${k.NombreUsuario}</small></p>
                    </div>
                  </div>
                </div>
              </div>` );
               listas ++;
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
    
}

function buscarNI(){
   
    let busca = "Nintendo"
    $("#Listas").empty();
   
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/busqueda/${busca}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            let listas = 1;
            parse[0].forEach((k, v) => {
                
                    $( "#Listas" ).prepend( `<div class="card mb-3" style="max-width: 840px;"  id="carta1" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" id="verLista${listas}">${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small id="Autor">Autor: ${k.NombreUsuario}</small></p>
                    </div>
                  </div>
                </div>
              </div>` );
               listas ++;
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
    
}

function buscarPC(){
   
    let busca = "PC"
    $("#Listas").empty();
   
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/busqueda/${busca}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            let listas = 1;
            parse[0].forEach((k, v) => {
                
                    $( "#Listas" ).prepend( `<div class="card mb-3" style="max-width: 840px;"  id="carta1" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" id="verLista${listas}">${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small id="Autor">Autor: ${k.NombreUsuario}</small></p>
                    </div>
                  </div>
                </div>
              </div>` );
               listas ++;
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
    
}

function buscarAN(){
   
    let busca = "Android"
    $("#Listas").empty();
   
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/busqueda/${busca}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            let listas = 1;
            parse[0].forEach((k, v) => {
                
                    $( "#Listas" ).prepend( `<div class="card mb-3" style="max-width: 840px;"  id="carta1" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" id="verLista${listas}">${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small id="Autor">Autor: ${k.NombreUsuario}</small></p>
                    </div>
                  </div>
                </div>
              </div>` );
               listas ++;
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
    
}

function buscarIO(){
   
    let busca = "IOS"
    $("#Listas").empty();
   
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/busqueda/${busca}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            let listas = 1;
            parse[0].forEach((k, v) => {
                
                    $( "#Listas" ).prepend( `<div class="card mb-3" style="max-width: 840px;"  id="carta1" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" id="verLista${listas}">${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small id="Autor">Autor: ${k.NombreUsuario}</small></p>
                    </div>
                  </div>
                </div>
              </div>` );
               listas ++;
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
    
}



$(document).click(function(event) {
  var text = $(event.target).text();
  localStorage.setItem("nombreLista", text);
});

$("#Listas").on("click", "a", function (event) {
 window.location.href='verListas.html';
});


function fetch(){
    
    
    var button = document.getElementById("buscarListas");
    if(button){
        button.addEventListener("click",buscarL, false );
    }

    var PS = document.getElementById("PS");
    if(PS){
        PS.addEventListener("click",buscarPS, false );
    }
    var XB = document.getElementById("XB");
    if(XB){
        XB.addEventListener("click",buscarXB, false );
    }
    var NI = document.getElementById("NI");
    if(NI){
        NI.addEventListener("click",buscarNI, false );
    }
    var PC = document.getElementById("PC");
    if(PC){
        PC.addEventListener("click",buscarPC, false );
    }
    var AN = document.getElementById("AN");
    if(AN){
        AN.addEventListener("click",buscarAN, false );
    }
    var IO = document.getElementById("IO");
    if(IO){
        IO.addEventListener("click",buscarIO, false );
    }

    
    
    var ID = localStorage.getItem("ID");
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
                
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();

    var req2 = new XMLHttpRequest();
    req2.open("GET",`http://localhost:3000/listas`, true);
    req2.onreadystatechange = function (data) {
        if (req2.readyState == 4 && req2.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            var valor = parse.length;
            let listas = 1;
            parse.forEach((k, v) => {
                if(valor <= 5){
                    $( "#Listas" ).prepend( `<div class="card mb-3" style="max-width: 840px;"  id="carta1" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="img/FF.png" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a href="#" id="verLista${listas}">${k.NombreLista}</a> 
                      <p class="card-text">${k.Descripcion}</p>
                      <p class="card-text"><small id="Autor">Autor: ${k.NombreUsuario}</small></p>
                    </div>
                  </div>
                </div>
              </div>` );

              listas++;
                }
                else{
                    valor --;
                }  
            });
        }
        else{
            console.log("hola");
        }
    }
    req2.send();
    
};

window.onload = fetch();