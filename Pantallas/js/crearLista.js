var cantListas=1;


$("[name ='mas']").click(function(){
    cantListas++;
    $("#listasElemento").append(`	<div id="lista${cantListas}">
    <div class="form-group" >
            <h3>Elemento ${cantListas}</h3>
            <label for="exampleFormControlInput1">Titulo</label>
            <br>	
            <input class="form-control" type="text" id="pin${cantListas}" name="pin" maxlength="	100" size="100">
    </div><br>
    <div class="form-group">
        <label for="exampleFormControlSelect1">Descripción</label>
        <br>
        <textarea class="form-control" name="message" rows="10" cols="100" id="desc${cantListas}"></textarea>
        
    </div>
    <div class="form-group">
            <label>	Selecciona una imagen</label>	
            <input type="file" class="form-control" id="exampleFormControlFile1">

            
    </div>
    <hr>
    </div> `)
});

$("[name ='menos']").click(function(){
    if(cantListas > 1)
    {
        $(`div#lista${cantListas}`).remove();
        cantListas--;
    }

    
});

$("#btnCrea").click(function(){
    var secciones = 0;
    var xbox = 0;
    var play = 0;
    var nintendo = 0;
    var pc = 0;
    var android = 0;
    var ios = 0;

    var xboxYA = false;
    var playYA = false;
    var nintendoYA = false;
    var pcYA = false;
    var androidYA = false;
    var iosYA = false;

    var GuardarTodo = false;

    if (document.getElementById('XB').checked)
    {
       xbox = 1;
       secciones++;
    }
    if (document.getElementById('PS').checked)
    {
       play = 2;
       secciones++
    }
    if (document.getElementById('NI').checked)
    {
        nintendo = 3;
        secciones++;
    }
    if (document.getElementById('PC').checked)
    {
        pc = 4;
        secciones++;
    }
    if (document.getElementById('AI').checked)
    {
        android = 5;
        secciones++;
    }
    if (document.getElementById('IO').checked)
    {
        ios = 6;
        secciones++;
    }


    var tituloL = document.getElementById("TituloLista").value;
    var PoP = document.getElementsByName('optradio');
    for (var i = 0, length = PoP.length; i < length; i++) {
      if (PoP[i].checked) {
        PoP= PoP[i].value;
        break;
      }
    }
    var ID = localStorage.getItem("ID");
    var desc = document.getElementById("descripcion").value;

    var req = new XMLHttpRequest();
    req.open("POST", "http://localhost:3000/agregarLista", true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(
      JSON.stringify({
        _NombreLista: tituloL,
        _PrivPub: PoP,
        _Autor: ID,
        _Descripcion: desc
      })
    );

    var req3 = new XMLHttpRequest();
    req3.open("GET",`http://localhost:3000/IdLista/${tituloL}`, true);
    req3.onreadystatechange = function (data) {
        if (req3.readyState == 4 && req3.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            
            parse[0].forEach((k, v) => {
                console.log(`${k.IdLista}`);

                for( var i = 0; i< secciones; i++)
                {
                    if(xbox == 1 && xboxYA == false)
                    {
                        var req2 = new XMLHttpRequest();
                        req2.open("POST", "http://localhost:3000/agregarSeccionLista", true);
                         req2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                         req2.send(
                           JSON.stringify({
                            idS: xbox,
                            idL: k.IdLista
                             })
                            );
                        xboxYA = true;
                    }
                    if(play == 2 && playYA == false)
                    {
                        var req2 = new XMLHttpRequest();
                        req2.open("POST", "http://localhost:3000/agregarSeccionLista", true);
                         req2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                         req2.send(
                           JSON.stringify({
                            idS: play,
                            idL: k.IdLista
                             })
                            );
                        playYA = true;
                    }
                    if(nintendo == 3 && nintendoYA == false)
                    {
                        var req2 = new XMLHttpRequest();
                        req2.open("POST", "http://localhost:3000/agregarSeccionLista", true);
                         req2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                         req2.send(
                           JSON.stringify({
                            idS: nintendo,
                            idL: k.IdLista
                             })
                            );
                        nintendoYA = true;
                    }
                    if(pc == 4 && pcYA == false)
                    {
                        var req2 = new XMLHttpRequest();
                        req2.open("POST", "http://localhost:3000/agregarSeccionLista", true);
                         req2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                         req2.send(
                           JSON.stringify({
                            idS: pc,
                            idL: k.IdLista
                             })
                            );
                        pcYA = true;
                    }
                    if(android == 5 && androidYA == false)
                    {
                        var req2 = new XMLHttpRequest();
                        req2.open("POST", "http://localhost:3000/agregarSeccionLista", true);
                         req2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                         req2.send(
                           JSON.stringify({
                            idS: android,
                            idL: k.IdLista
                             })
                            );
                        androidYA = true;
                    }
                    if(ios == 6 && iosYA == false)
                    {
                        var req2 = new XMLHttpRequest();
                        req2.open("POST", "http://localhost:3000/agregarSeccionLista", true);
                         req2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                         req2.send(
                           JSON.stringify({
                            idS: ios,
                            idL: k.IdLista
                             })
                            );
                        iosYA = true;
                    }
                       
                    
                }

                for(var ll = 0; ll < cantListas; ll++)
                 {
                     var tituliElemento = document.getElementById(`pin${ll + 1}`).value;
                     var descElemento = document.getElementById(`desc${ll+1}`).value;
                     var req5 = new XMLHttpRequest();
                     req5.open("POST", "http://localhost:3000/agregarElemento", true);
                      req5.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                      req5.send(
                        JSON.stringify({
                         _titulo: tituliElemento,
                         _Descripcion: descElemento,
                         _IdLista: k.IdLista
                          })
                           );
                }

                GuardarTodo = true;

            });
        }
        else{
            console.log("hola");
        }
    }
    req3.send();

  
        window.location = 'paginaPerfil.html';
    
   
})


function fetch()
{
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

    
}

window.onload = fetch();