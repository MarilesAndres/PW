CREATE DATABASE  IF NOT EXISTS `PracticaKardex`;
USE `PracticaKardex`;

Create table if not exists Alumno(
Kardex int unsigned not null  primary key,
nombre varchar(100), 
IdCarrera int unsigned,
constraint FK_Alumno_Carrera foreign key (IdCarrera) references Carrera(IdCarrera)
);

Create table if not exists Carrera(
IdCarrera int unsigned not null auto_increment primary key,
nombre varchar(50)
);

Create table if not exists Materia(
IdMateria int unsigned not null auto_increment primary key,
nombre varchar(59),
fecha datetime,
calificacion int,
oportunidad int,
IdCarrera int unsigned,
aprobada bit,
constraint FK_Materia_Carrera foreign key (IdCarrera) references Carrera(IdCarrera)
);


Create table if not exists Alumno_Materia(
IdAlumMat int unsigned,
Kardex int unsigned,
IdMateria int unsigned,
constraint FK_Alumno_TR foreign key (Kardex) references Alumno(Kardex),
constraint FK_Materia_TR foreign key (IdMateria) references Materia(IdMateria)
); 

insert into Alumno (Kardex, nombre, IdCarrera) values ("1800719", 'Pablo Mariles Feregrino', 1);

select Kardex,Alumno.nombre Alumno, Carrera.nombre Carrera from Alumno inner join Carrera on Alumno.IdCarrera = Carrera.IdCarrera;

insert into Carrera (nombre) values ("Video Juegos");

insert into Materia (nombre, fecha, calificacion, oportunidad, IdCarrera, aprobada) values ('Progra 1', '2020-05-17 10:35:00', 100, 1, 1, 1);
insert into Alumno_Materia (Kardex, IdMateria) values (1800719,1);

insert into Materia (nombre, fecha, calificacion, oportunidad, IdCarrera, aprobada) values ('Progra 2', '2020-05-17 10:35:00', 60, 2, 1, 0);
insert into Alumno_Materia (Kardex, IdMateria) values (1800719,2);

insert into Materia (nombre, fecha, calificacion, oportunidad, IdCarrera, aprobada) values ('Progra 3', '2020-05-17 10:35:00', 90, 1, 1, 1);
insert into Alumno_Materia (Kardex, IdMateria) values (1800719,3);



select Alumno.nombre Alumno, Alumno.Kardex Matricula, Carrera.nombre Carrera , Materia.nombre Materia, Materia.fecha, Materia.calificacion, Materia.oportunidad, 
IF(Materia.calificacion>=70, "Aprobada", "Sin Aprobar" ) Estatus from Alumno
inner join  Alumno_Materia on Alumno_Materia.Kardex = Alumno.Kardex 
inner join Materia on Alumno_Materia.IdMateria = Materia.IdMateria
inner join Carrera on Materia.IdCarrera = Carrera.IdCarrera
where Alumno.Kardex = 1800719;



select Alumno.nombre, Materia.nombre Materia from Alumno 
inner join  Alumno_Materia on Alumno.Kardex = Alumno_Materia.Kardex 
inner join Materia on Alumno_Materia.IdMateria = Materia.IdMateria
GROUP BY Alumno.nombre;

DELIMITER $$
CREATE PROCEDURE Kardex (in Matricula int)
BEGIN
	select Alumno.nombre Alumno, Alumno.Kardex Matricula, Carrera.nombre Carrera , Materia.nombre Materia, Materia.fecha, Materia.calificacion, Materia.oportunidad, 
IF(Materia.calificacion>=70, "Aprobada", "Sin Aprobar" ) Estatus from Alumno
inner join  Alumno_Materia on Alumno_Materia.Kardex = Alumno.Kardex 
inner join Materia on Alumno_Materia.IdMateria = Materia.IdMateria
inner join Carrera on Materia.IdCarrera = Carrera.IdCarrera
where Alumno.Kardex = Matricula;

    
END$$
DELIMITER ;
 
call Kardex(1800719);
