
# Proyecto React
En este proyecto vamos a realizar una aplicación web que nos permita hacer una planificación de un menú semanal. En la página web podemos introducir los datos de 3 comidas por día para una semana entera ayudandonos de https://mockapi.io/.

## Estructura del Proyecto

src/
components/
LoginForm.jsx
RegisterForm.jsx
MenuList.jsx
MenuItem.jsx
AddMenuForm.jsx
AddMealForm.jsx
MealFilter.jsx

context/
AuthContext.js
MenuContext.js

pages/
LoginPage.jsx
RegisterPage.jsx
DashboardPage.jsx

assets/
apiService.js
App.jsx
index.jsx
routes.js

## Descripción de cada componente y archivo

components/LoginForm.jsx: Formulario de inicio de sesión.

components/RegisterForm.jsx: Formulario de registro.

components/MenuList.jsx: Lista de menús semanales.

components/MenuItem.jsx: Componente para mostrar un día específico con sus comidas.

components/AddMenuForm.jsx: Formulario para agregar un nuevo menú semanal.

components/AddMealForm.jsx: Formulario para agregar una nueva comida a un día específico.

components/MealFilter.jsx: Componente para filtrar las comidas por día.

context/AuthContext.js: Contexto para manejar la autenticación del usuario.

context/MenuContext.js: Contexto para manejar los datos del menú y sus comidas.

pages/LoginPage.jsx: Página de inicio de sesión.

pages/RegisterPage.jsx: Página de registro.

pages/DashboardPage.jsx: Página principal que muestra el menú semanal y permite agregar, modificar y eliminar menús y comidas.

services/apiService.js: Servicio para interactuar con la API (mockapi.io o una API de Node).

App.js: Componente principal de la aplicación que configura las rutas.

index.js: Punto de entrada de la aplicación.

routes.js: Definición de rutas privadas y públicas.