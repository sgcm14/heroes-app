Heroes Apps
=============
- Este proyecto se realizó siguiendo el curso [Angular: De cero a experto](https://www.udemy.com/course/angular-fernando-herrera/# "Angular: De cero a experto") 
> En este proyecto se usó Angular

Para empezar se debe levantar la BD con el siguiente comando **json-server --watch db.json** ó ejecutando ```npm run backend``` la terminal se visualiza asi:

![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/db-json.png)
> Pantalla de **BD Json-server**

Para poder ingresar se deben ingresar las siguientes credenciales:
**email:** john.due@gmail.com
**password:** user123

 al darle click en **Ingresar** te lleva a la pantalla del listado de héroes, en donde te muestra la sesión del usuario logueada, si le das en logout, por mas que ingreses a la ruta de listado, no te la mostrará y te redirigirá a **login**. Si ya estas logueado e intentas navegar a la ruta de **login** o **registro**, tampoco se te mostrará porque hay un guard implementado para cada caso.
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen01.png)
> Pantalla de **Login**

![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen01-2.png)
> Pantalla de **Registro**

En esta pantalla se lista todos los héroes de la BD como se muestra a continuación:
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen02.png)
> Pantalla de **Listado de Héroes**

Al hacer click en **Menú**, puedes añadir, buscar o listar héroes
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen03.png)
> Pantalla de **Listado de Héroes**

Al dar click en  **Añadir Héroe** se ve así, por defecto te muestra una imagen momentánea
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen04.png)
> Pantalla de **Agregar Héroe**

Aquí se muestra como se llenan los datos del nuevo héroe, en el caso no se incluya el url de la imagen del héroe, entonces se guardará la imagen por defecto que se muestra, cuando le das en **Guardar** te redirige a la ruta para editar héroe.
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen05.png)
> Pantalla de **Agregar Héroe**

En esta pantalla te muestra los datos del Héroe, en el caso ingresara una imagen del héroe, la podrás visualizar de lo contrario te mostrará la imagen genérica. Si gustas puedes modificar datos y darle click en **Actualizar**
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen06.png)
> Pantalla de **Editar Héroe**

Si das click en menú:
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen07.png)
> Pantalla de **Editar Héroe**

Al dar click en **Listado de Héroes** puedes visualizar el nuevo héroe añadido
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen08.png)
> Pantalla de **Listado de Héroes**

Al ingresar al buscador y digitar un nombre, este te arroja las palabras que contienen lo que digitas, y puedes seleccionar alguno 
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen09.png)
> Pantalla de **Buscador de Héroes**

Al seleccionar algún héroe, se muestra la información de ese héroe
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen10.png)
> Pantalla de **Buscador de Héroes**

Si se da click en **Borrar** aparece un modal para confirmar si realmente desea borrar el héroe seleccionado.
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen11.png)
> Pantalla de **Editar Héroe**

Al eliminar un héroe, se te redirige al listado de héroes
![](https://raw.githubusercontent.com/sgcm14/heroes-app/main/doc/imagen12.png)
> Pantalla de **Listado de Héroes**

**Realizado por :** Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">
