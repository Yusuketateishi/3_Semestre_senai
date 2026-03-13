create table USUARIOS (
  id_usuario SERIAL primary key,
  nome varchar(100) not null,
  email varchar(150) not null,
  senha varchar(255) not null
);
create table DEPARTAMENTOS (
  id_departamento SERIAL primary key,
  nome varchar(100) not null,
  descricao varchar(255)
);
create table ORDEM_SERVICOS (
  id_ordem SERIAL primary key,
  nr_ordem int unique,
  titulo varchar(100) not null,
  descricao varchar(255) not null,
  prioridade varchar(100) not null,
  status varchar(100) not null,
  data date not null,
  id_usuario int not null references USUARIOS(id_usuario),
  id_departamento int not null references DEPARTAMENTOS(id_departamento)
)
INSERT INTO USUARIOS(nome,email,senha) values ('Ana Silva', 'ana.silva@gamil.com','senha123')
INSERT INTO USUARIOS(nome,email,senha) values ('Pedro Henrique', 'pedro.h@gamil.com','senha123')
//
INSERT INTO DEPARTAMENTOS(nome,descricao) values ('3ºB','Sala SENAI Ensino Médio')
INSERT INTO DEPARTAMENTOS(nome,descricao) values ('3ºB','Sala de Aula Ensino Médio')
//
INSERT INTO ORDEM_SERVICOS(nr_ordem,titulo,descricao,prioridade,status,data,id_usuario,id_departamento) values 
(102,'Arrumar a Rede','Consertar o WIFI','Alta','Em Andamento','2026-02-26','2','2'),
(100,'Limpar o Refeitório','Limpar as cantinas das sujeiras','Média','Em Andamento','2026-02-26','1','2')