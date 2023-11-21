# LAWYER AI

## Tabla de Contenidos

1. [Introducción](#1-introducción)
2. [Arquitectura del Sistema](#2-arquitectura-del-sistema)
3. [Funcionalidades](#3-funcionalidades)
4. [Empezando](#4-empezando)
5. [Uso](#5-uso)
6. [Base de Datos](#6-base-de-datos)
7. [Pruebas](#7-pruebas)
8. [Contribuciones](#8-contribuciones)
9. [Licencia](#9-licencia)
10. [Agradecimientos](#10-agradecimientos)

---

## 1. Introducción

La API de LAWYER-AI esta desarrollada para poder controlar y administar los contratos actuales de una manera mas sensilla. Le permitimos al usuario corriente que pueda acceder de manera rapida a la APP LAWYER AI e intente resumir un contrato con nuestra mas reciente tecnologia desarrollada, tambien manejamos la autenticacion de usuarios. Obtienes datos de la fechas de tus resumenes que generaste y podras acceder a ellos de manera sensilla y rapida.
Estamos transformando la forma en que los profesionales legales revisan y mejoran contratos.
Las tecnologias utilizadas incluyen Next.JS, Prisma para las interacciones con la base de datos y bcrypt para el cifrado.

---

## 2. Arquitectura del Sistema

1. arquitectura del sistema
Usuario envia el archivo pdf al servicio Frontend - recepcionamos desde el Frontend el texto - enviamos el texto, datos del usuario al Backend - se resume el texto ingresado en la base de datos y se envia de nuevo al Backend la lista de resumen y los datos requeridos del usuario.  

---

## 3. Funcionalidades

1. Al momento de acceder al landing te encontraras con un navbar el cual te puede llevar a logearte.
2. Tendras una breve publicidad de quienes somos y de como obtener tu primera cuenta o acceder como usuario ya registrado en el margen izquierda de la pantalla
3. En el centro de la pantalla podras observar un boton que te permite cargar tu archivo de tipo .PDF para poder empezar a probar la aplicacion
4. En el centro de la pantalla podras observar un boton que te permita enviar tu archivo a nuestra base de datos para poder realizar tu resumen inteligente.
5. En la seccion de register, encontraras los campos necesarios para crear un usuario valido y poder loguearte con facilidad.
6. En la seccion de Log-in, encontraras los campos necesarios para crear un usuario valido y poder loguearte con facilidad.
7. En la seccion de resume, encontraras el mismo campo de nuestro landing pero con un plus, en el cual nuestra publicidad principal se transforma en un historial accesible de todos tus resumenes.

---

## 4. Empezando

1. Clona el repositorio

git clone https://github.com/Fedreric/Lawyer-AI.git

2. Instalar las dependencias

cd Lawyer-AI
npm install

4. Configura el archivo .env

cp .env.example .env

5. Configurar la base de datos local mediante prisma

npx prisma migrate dev

6. Mejoras futuras

Incorporando estilos mas amigables al publico
Adicion de pruebas unitarias para cada modulo
Implementacion de lectura de archivos en formato WORD.
Implemente una demostracion en vivo de la API mediante la aplicacion Railways


---


## 5. Agradecimientos

Agradecemos a los desarrolladores/tutores que nos guiaron en este camino para poder construir esta app mediante sus concejos y contribuciones en conocimientos de las tecnologias implementadas.
Agradecemos a la documentacion facilitada por Next-js
Agradecemos a la documentacion facilitada por Prisma
Agradecemos a la documentacion facilitada por PostgreSQL
Agradecemos a los canales de Youtube que nos permitieron comprender de un punto de vista mas amplio el como llegar al resultado final
Agradecemos a las instituciones que nos capacitaron y nos dieron el espacio para poder implementar los conocimientos brindados.
Agradecemos a GitHub que nos permite el publicar nuestra APP para facilitar nuestro trabajo colavorativo y a futuros desarrolladores el mejoramiento de cualquier debilidad o fortaleza que posea la aplicacion actualmente.
Agradecemos el espacio brindado en Discord por Global-Learning y Not-Nini que nos permitieron llevar acabo este nuevo proyecto.
Agradecemos a los integrantes por su participacion y tiempo dedicado al desarrollo e implementacion de todas las tecnologias.

## Integrantes:
 https://github.com/canogerman - https://github.com/Fedreric - https://github.com/AgustinCNz -  


