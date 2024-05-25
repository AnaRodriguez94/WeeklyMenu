
# Proyecto React
En este proyecto vamos a realizar una aplicación web que nos permita hacer una planificación de un menú semanal. En la página web podemos introducir los datos de 3 comidas por día para una semana entera ayudandonos de https://mockapi.io/.

## Estructura del Proyecto

src/
components/
LoginForm.jsx
RegisterForm.jsx
menu/
MenuList.jsx
DailyMenu.jsx

contexts/
AuthContext.js
MenuContext.js

pages/
Home.js
MenuPage.js

routes/
PrivateRoute.js

assets/
App.js
routes.js
index.js

## Descripción de cada componente y archivo

components/LoginForm.jsx: Formulario de inicio de sesión.

components/RegisterForm.jsx: Formulario de registro.

menu/MenuList.jsx: Lista de menús semanales.

menu/DailyMenu.jsx: Componente para mostrar un día específico con sus comidas.

context/AuthContext.js: Contexto para manejar la autenticación del usuario.

context/MenuContext.js: Contexto para manejar los datos del menú y sus comidas.

pages/Home.jsx: Página de inicio de sesión.

pages/MenuPage.jsx: Página de menu

App.js: Componente principal de la aplicación que configura las rutas.

index.js: Punto de entrada de la aplicación.

routes.js: Definición de rutas privadas y públicas.