USE `GameLand`;

DELIMITER //
CREATE PROCEDURE LogIn()
BEGIN
SELECT IdUsuario,
        Correo,
        NombreUsuario,
        Contraseña
        FROM Usuario;
END 
//
DELIMITER ;

call LogIn;


DELIMITER //
CREATE PROCEDURE BuscarPorSeccion(in busqueda varchar(20))
BEGIN
select NombreLista, PrivPub, Descripcion, u.NombreUsuario, s.Nombre from Listas l 
inner join Usuario u on l.Autor = u.IdUsuario
inner join Lista_Seccion ls on ls.IdLista = l.IdLista 
inner join Secciones s on ls.IdSeccion = s.IdSeccion
where  s.Nombre like concat(concat('%',busqueda),'%') and u.PoP = 1 and l.PrivPub = 1;
END 
//
DELIMITER ;

drop procedure BuscarPorSeccion;

call BuscarPorSeccion("pc");

DELIMITER //
CREATE PROCEDURE VerLista(in nombreL varchar(20))
BEGIN
select el.Titulo, el.Descripcion as DescripcionLista, u.Correo, u.NombreUsuario, u.PoP, l.NombreLista from ElementoLista el
inner join Listas l on l.IdLista = el.IdLista
inner join Usuario u on u.IdUsuario = l.Autor
where NombreLista = nombreL;
END 
//
DELIMITER ;

drop procedure VerLista;

call VerLista("Juegos PLAY");

select * from listas;
DELIMITER //
CREATE PROCEDURE VerListaId(in id int)
BEGIN
select IdLista, NombreLista, Descripcion , privPub from listas
where IdLista = id;
END 
//
DELIMITER ;{

drop procedure VerListaId;

call VerListaId(42);

DELIMITER //
CREATE PROCEDURE ListasUsuario(in _Autor int)
BEGIN
select IdLista, NombreLista, PrivPub, Descripcion from Listas l inner join Usuario u on u.IdUsuario = l.Autor where Autor  = _Autor; 
END 
//
DELIMITER ;

drop procedure ListasUsuario;

call ListasUsuario(1);



DELIMITER //
CREATE PROCEDURE AutorDeLista(in _Autor varchar(20))
BEGIN
select IdUsuario,
        Correo,
        NombreUsuario, PoP from Usuario where NombreUsuario = _Autor;
END 
//
DELIMITER ;

drop procedure AutorDeLista;

call AutorDeLista("Andrea");


DELIMITER //
CREATE PROCEDURE ListasUsuarioP(in _Autor varchar(20))
BEGIN
select NombreLista, PrivPub, Descripcion from Listas l inner join Usuario u on u.IdUsuario = l.Autor where u.NombreUsuario  = _Autor and l.PrivPub = 1; 
END 
//
DELIMITER ;

drop procedure ListasUsuarioP;

call ListasUsuarioP("Andrea");


DELIMITER //
CREATE PROCEDURE Secciones()
BEGIN
select nombre from Secciones;
END 
//
DELIMITER ;

call Secciones();

DELIMITER //
CREATE PROCEDURE AgregaLista(in _NombreLista varchar(50), in _PrivPub int, in _Autor int, in _descripcion text)
BEGIN
insert into Listas set NombreLista = _NombreLista, PrivPub = _PrivPub, Autor = _Autor, Descripcion = _descripcion;
END 
//
DELIMITER ;
 call AgregaLista();


select * from listas;

DELIMITER //
CREATE PROCEDURE IdListaAutor(in _NombreLista varchar(50))
BEGIN
select IdLista from Listas where NombreLista = _NombreLista;
END 
//
DELIMITER ;

drop procedure IdLista;

call IdListaAutor ("ayuda");


DELIMITER //
CREATE PROCEDURE IdListaAutor(in _NombreLista varchar(50))
BEGIN
select IdLista from Listas where NombreLista = _NombreLista;
END 
//
DELIMITER ;

insert into Lista_Seccion set IdSeccion = 1, IdLista = 1;

DELIMITER //
CREATE PROCEDURE agregarSeccion(in idS int, in idL int)
BEGIN
insert into Lista_Seccion set IdSeccion = idS, IdLista = idL;
END 
//
DELIMITER ;


insert into ElementoLista set Titulo = 'Urcharted', Descripcion = 'Juegazo mamalon', IdLista = 7;

DELIMITER //
CREATE PROCEDURE agregarElemento(in _titulo varchar(50), in _Descripcion text, in _IdLista int)
BEGIN
insert into ElementoLista set Titulo = _titulo , Descripcion = _Descripcion, IdLista = _IdLista;
END 
//
DELIMITER ;


call agregarElemento();


drop procedure eliminTabla;
DELIMITER //
CREATE PROCEDURE eliminTabla(in _IdLista int)
BEGIN
SET FOREIGN_KEY_CHECKS=0;
delete from listas where IdLista = _IdLista;
SET FOREIGN_KEY_CHECKS=1;
END 
//
DELIMITER ;


call eliminTabla(31);

drop procedure editaLista;
DELIMITER //
CREATE PROCEDURE editaLista(in _IdLista int, in _NombreLista varchar(30), in _Descripcion text, in _PrivPub bit)
BEGIN
	update listas set NombreLista = _NombreLista, Descripcion = _Descripcion, PrivPub = _PrivPub
    where IdLista = _IdLista;
END 
//
DELIMITER ;

call editaLista(20, 'los mejores personajes', 'PERSONAJEEEEES', 0);



