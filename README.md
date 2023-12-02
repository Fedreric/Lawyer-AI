¡Claro! Aquí está el texto corregido:

# LAWYER AI

## **Tabla de Contenidos**

1. [Introducción](#1-introducción)
2. [Arquitectura del Sistema y Estructura](#2-arquitectura-del-sistema-y-estructura)
3. [Funcionalidades](#3-funcionalidades)
4. [Empezando](#4-empezando)
5. [Mejoras Futuras](#5-mejoras-futuras)
6. [Agradecimientos](#6-agradecimientos)

---

## **1. Introducción**

La API de LAWYER-AI está desarrollada para poder controlar y administrar los contratos actuales de una manera más sencilla. Le permitimos al usuario corriente que pueda acceder de manera rápida a la APP LAWYER AI e intentar resumir un contrato con nuestra más reciente tecnología desarrollada. También manejamos la autenticación de usuarios. Obtienes datos de las fechas de tus resúmenes que generaste y podrás acceder a ellos de manera sencilla y rápida.
Estamos transformando la forma en que los profesionales legales revisan y mejoran contratos.
Las tecnologías utilizadas incluyen Next.JS, Prisma para las interacciones con la base de datos y bcrypt para el cifrado.

---

## **2. Arquitectura del Sistema y Estructura**

1. Arquitectura del sistema
El usuario envía el archivo pdf al servicio Frontend - recepcionamos desde el Frontend el texto - enviamos el texto y datos del usuario al Backend - se resume el texto ingresado en la base de datos y se envía de nuevo al Backend la lista de resumen y los datos requeridos del usuario.

![Arquitectura del Sistema](src/assets/architecture.png)

2. Estructura de la API

![Estructura](src/assets/infrastructure.png)

---

## **3. Funcionalidades**

1. Al momento de acceder al landing te encontrarás con un navbar el cual te puede llevar a loguearte.
2. Tendrás una breve publicidad de quienes somos y de cómo obtener tu primera cuenta o acceder como usuario ya registrado en el margen izquierdo de la pantalla.
3. En el centro de la pantalla podrás observar un botón que te permite cargar tu archivo de tipo .PDF para poder empezar a probar la aplicación.
4. En el centro de la pantalla podrás observar un botón que te permite enviar tu archivo a nuestra base de datos para poder realizar tu resumen inteligente.
5. En la sección de registro, encontrarás los campos necesarios para crear un usuario válido y poder loguearte con facilidad.
6. En la sección de inicio de sesión, encontrarás los campos necesarios para crear un usuario válido y poder loguearte con facilidad.
7. En la sección de resumen, encontrarás el mismo campo de nuestro landing pero con un plus, en el cual nuestra publicidad principal se transforma en un historial accesible de todos tus resúmenes.

---

## **4. Empezando**

1. Clona el repositorio

```bash 
git clone git@github.com:Fedreric/Lawyer-AI.git
```

2. Instala las dependencias

```bash 
cd Lawyer-AI
npm install
```

3. Configura el archivo .env

```bash
cp .env.example .env
```

```bash
DATABASE_URL="postgresql://[postgres]:[PASSWORD]@[host:5433]/DB.NAME?schema=public"
```   

```bash
NEXTAUTH_URL="http://localhost:3000/"
``` 

```bash
$ openssl rand -base64 32
# Con esto creamos código random para usuarios de Linux / ejemplo [NEXTAUTH_SECRET="tu-código-secreto"]
```

4. Configura la base de datos local mediante Prisma

```bash 
npx prisma migrate dev
```

## **5. Mejoras Futuras**

- Incorporar estilos más amigables al público
- Adición de pruebas unitarias para cada módulo
- Implementación de lectura de archivos en formato WORD.
- Implementar una demostración en vivo de la API mediante la aplicación Railways

---

## **6. Agradecimientos**

Agradecemos a los desarrolladores/tutores que nos guiaron en este camino para poder construir esta app mediante sus consejos y contribuciones en conocimientos de las tecnologías implementadas.<br>
Agradecemos a la documentación facilitada por Next.js<br>
Agradecemos a la documentación facilitada por Prisma<br>
Agradecemos a la documentación facilitada por PostgreSQL<br>
Agradecemos a los canales de Youtube que nos permitieron comprender desde un punto de vista más amplio el cómo llegar al resultado final<br>
Agradecemos a las instituciones que nos capacitaron y nos dieron el espacio para poder implementar los conocimientos brindados.<br>
Agradecemos a GitHub que nos permite publicar nuestra APP para facilitar nuestro trabajo colaborativo y a futuros desarrolladores el mejoramiento de cualquier debilidad o fortaleza que posea la aplicación actualmente.<br>
Agradecemos el espacio brindado en Discord por Global-Learning y Not-Nini que nos permitieron llevar a cabo este nuevo proyecto.<br>
Agradecemos a los integrantes por su participación y tiempo dedicado al desarrollo e implementación de todas las tecnologías.<br>

## **Integrantes:**
- https://github.com/canogerman <br>
- https://github.com/Fedreric <br>
- https://github.com/AgustinCNz <br>