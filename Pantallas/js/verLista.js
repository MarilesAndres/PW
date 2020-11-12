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

    var NL = localStorage.getItem("nombreLista");
    var req = new XMLHttpRequest();
    req.open("GET",`http://localhost:3000/verLista/${NL}`, true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);
            
            parse[0].forEach((k, v) => {
                console.log(`${k.Titulo}`);
                console.log(`${k.DescripcionLista}`);
                console.log(`${k.Correo}`);
                console.log(`${k.NombreUsuario}`);
                console.log(`${k.PoP}`);
                console.log(`${k.PoP}`);
                document.getElementById("Lnombre").innerHTML = k.NombreUsuario;
                document.getElementById("Lcorreo").innerHTML = k.Correo;
                if(k.PoP.data[0] == 1)
                {
                    document.getElementById("Lpop").innerHTML = "Publico";
                }
                else{
                    document.getElementById("Lpop").innerHTML = "Privado";
                }
                document.getElementById('tituloLista').innerHTML = k.NombreLista;

                $( "#Elementos" ).append( `<div class="row" id="elementoLista">
                <div class="col-4">
                
                    <div class="form-group">
                        <img src="img/imgenn.png" id="imagen">
                    </div>
        
                </div>
                <div class="col-8" >	
                        <div class="form-group" >
                        <label for="exampleFormControlInput1" id="titu">${k.Titulo}</label>
                        <br>	
                    
                </div><br>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Descripción</label>
                        <br>
                        <textarea name="message" rows="10" cols="90" disabled="">${k.DescripcionLista}</textarea>
                        
                    </div>
                </div>
                    </div>
                    <br>` );
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
   
};

$(document).click(function(event) {
    var text = $(event.target).text();
    localStorage.setItem("AutorVer", text);
  });

  $("#VL").click(function(){
    window.location.href='autorLista.html';
  });

window.onload = fetch();