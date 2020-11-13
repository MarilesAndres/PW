CREATE DATABASE  IF NOT EXISTS `GameLand`;
USE `GameLand`;

Create table if not exists Usuario(
IdUsuario int unsigned not null auto_increment  primary key,
Correo varchar(50) not null,
NombreUsuario varchar(50) not null,
Contraseña varchar(20) not null,
Foto blob
);



aLTER TABLE Usuario ADD PoP bit default 1;

ALTER TABLE usuario
ADD UNIQUE (NombreUsuario);

ALTER TABLE usuario
ADD UNIQUE (Correo);

insert usuario(Correo, NombreUsuario, Contraseña) values ('mariles@yahoo.com','Pablo','123');
insert usuario(Correo, NombreUsuario, Contraseña) values ('Rosas@yahoo.com','Andreita','789');

select * from Usuario;

SELECT IdUsuario,
        Correo,
        NombreUsuario,
        Contraseña,
        PoP
        FROM Usuario;

delete from usuario where IdUsuario = 2;

UPDATE usuario SET Correo= 'Margarita@yahoo.com', NombreUsuario = 'Androta', Contraseña= 'Zorra', 
    PoP = 0
     WHERE IdUsuario = 3;

Create table if not exists Listas(
IdLista int unsigned not null auto_increment  primary key,
NombreLista varchar(30) not null,
PrivPub bit default(1),
Autor int unsigned,
constraint FK_Lista_Usuario foreign key (Autor) references Usuario(IdUsuario)
);

aLTER TABLE Listas ADD Descripcion text not null;

describe Listas;

insert into Listas set NombreLista = 'XBOX JuegosShooter', PrivPub = 1, Autor = 1, Descripcion = 'Los mejores juegos de xbox que he jugado hasta la fecha';
insert into Listas set NombreLista = 'XBOX JuegosROL', PrivPub = 1, Autor = 4, Descripcion = 'Juegos de Rol muy buenos';
insert into Listas set NombreLista = 'ONLINE', PrivPub = 1, Autor = 3, Descripcion = 'Todos los juegos Online que me gustaria jugar';
insert into Listas set NombreLista = 'JuegosRetro', PrivPub = 1, Autor = 7, Descripcion = 'Los mejores juegos retro segun la critica';
insert into Listas set NombreLista = 'Juegos de Estrategia', PrivPub = 1, Autor = 6, Descripcion = 'Para mejorar tu IQ en 1000';
insert into Listas set NombreLista = 'Juegos para Mobil', PrivPub = 1, Autor = 3, Descripcion = 'Juegos para duvertirte sin necesidad de computadora, solo tu telefono';
insert into Listas set NombreLista = 'Juegos PLAY', PrivPub = 1, Autor = 6, Descripcion = 'Mejores juegos de PLAY';
select * from Listas;

delete from Listas where IdLista = 18;

update Listas set PrivPub = 0 where IdLista = 3;

select NombreLista, PrivPub, Descripcion, u.NombreUsuario, Nombre from Listas l 
inner join Usuario u on l.Autor = u.IdUsuario;

select NombreLista, PrivPub, Descripcion, u.NombreUsuario, s.Nombre from Listas l 
inner join Usuario u on l.Autor = u.IdUsuario
inner join Lista_Seccion ls on ls.IdLista = l.IdLista 
inner join Secciones s on ls.IdSeccion = s.IdSeccion;

select NombreLista, PrivPub, Descripcion, u.NombreUsuario, s.Nombre from Listas l 
inner join Usuario u on l.Autor = u.IdUsuario
inner join Lista_Seccion ls on ls.IdLista = l.IdLista 
inner join Secciones s on ls.IdSeccion = s.IdSeccion
where  s.Nombre like '%ios%';


Create table if not exists Secciones(
IdSeccion int unsigned not null auto_increment  primary key,
Nombre enum('XBOX','PlayStation','Nintendo','PC','Android', 'IOS')
);
select * from Secciones;


Create table if not exists Lista_Seccion(
IdLS int unsigned not null auto_increment  primary key,
IdSeccion int unsigned,
IdLista int unsigned,
constraint FK_Seccion_TR foreign key (IdSeccion) references Secciones(IdSeccion),
constraint FK_Lista_TR foreign key (IdLista) references Listas(IdLista)
);
select * from Lista_Seccion;
insert into Lista_Seccion set IdSeccion = 1, IdLista = 1;

insert into Lista_Seccion set IdSeccion = 1, IdLista = 2;

insert into Lista_Seccion set IdSeccion = 1, IdLista = 3;
insert into Lista_Seccion set IdSeccion = 4, IdLista = 3;

insert into Lista_Seccion set IdSeccion = 3, IdLista = 4;
insert into Lista_Seccion set IdSeccion = 4, IdLista = 4;

insert into Lista_Seccion set IdSeccion = 2, IdLista = 5;
insert into Lista_Seccion set IdSeccion = 4, IdLista = 5;

insert into Lista_Seccion set IdSeccion = 5, IdLista = 6;
insert into Lista_Seccion set IdSeccion = 6, IdLista = 6;

insert into Lista_Seccion set IdSeccion = 2, IdLista = 7;

Create table if not exists ElementoLista(
IdElementosListas int unsigned not null auto_increment  primary key,
Titulo varchar(30) not null,
Descripcion text,
Imagen blob,
IdLista int unsigned,
constraint FK_ElementoL_Listas foreign key (IdLista) references Listas(IdLista)
);

select * from ElementoLista;

insert into ElementoLista set Titulo = 'Urcharted', Descripcion = 'Juegazo mamalon', IdLista = 7;
insert into ElementoLista set Titulo = 'Spider Man', Descripcion = 'Juegazo mamalon de arañas y seperherues', IdLista = 7;
insert into ElementoLista set Titulo = 'God of War', Descripcion = 'Juegazo mamalon de dioses', IdLista = 7;
insert into ElementoLista set Titulo = 'Last of Us 2', Descripcion = 'Juegazo mamalon de una lesbiana', IdLista = 7;

insert into ElementoLista set Titulo = 'Clash Royale', Descripcion = 'Juego de guerra y estrategia', IdLista = 6;


select el.Titulo, el.Descripcion as DescripcionLista, u.Correo, u.NombreUsuario, u.PoP from ElementoLista el
inner join Listas l on l.IdLista = el.IdLista
inner join Usuario u on u.IdUsuario = l.Autor
where NombreLista = "Juegos PLAY";


select NombreLista, PrivPub, Descripcion, u.NombreUsuario  from Listas l 
    inner join Usuario u on l.Autor = u.IdUsuario where u.PoP = 0;
    
    
    
    select NombreLista, PrivPub, Descripcion, u.NombreUsuario  from Listas l 
    inner join Usuario u on l.Autor = u.IdUsuario where u.PoP = 1 and l.PrivPub = 1 order by l.IdLista desc;
