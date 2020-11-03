function fetch(){
    var req = new XMLHttpRequest();
    req.open ("GET","http://localhost:3000/user",true);
    req.onreadystatechange = function (data) {
        if (req.readyState == 4 && req.status == 200) {
            var usuario = document.getElementById("formula1");
            var datos = data.target.response;
            console.log(datos);
            var parse = JSON.parse(datos);

            parse.forEach((k, v) => {
                console.log(`${k.NombreUsuario}`);
                console.log(`${v}`);
                usuario.value = k.NombreUsuario;
            });
        }
        else{
            console.log("hola");
        }
    }
    req.send();
};

window.onload = fetch();

/*window.onload = function () {
    let userForm = document.forms["user"];
    userForm.addEventListener("submit", sendUser);
    var req = new XMLHttpRequest();
    req.open("GET", "http://localhost:3000/user", true);
  
    req.onreadystatechange = function (data) {
      if (req.readyState == 4 && req.status == 200) {
        var users = document.querySelector("div#users");
        var fecthData = data.target.response;
        var parse = JSON.parse(fecthData);
        console.log(fecthData);
        //   users.append(fecthData);
        //   console.log(parse);
        //   users.append(parse);
        parse.forEach((k, v) => {
          console.log(`K: ${k.usersName}`);
          console.log(`V: ${v}`);
          users.innerHTML += divFormat(k.usersName, k.userPassword);
        });
      }
    };
    req.send();
  };*/