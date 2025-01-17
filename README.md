# AluraFlix - Aplicación Web en React

**AluraFlix** es una aplicación web desarrollada en **React** que permite gestionar videos categorizados en áreas como **Frontend**, **Backend**, **Innovación** y **Gestión**. La aplicación incluye funcionalidades **CRUD** para crear, visualizar, editar y eliminar videos. Los datos son gestionados a través de una **API simulada** con **json-server** y las solicitudes HTTP son realizadas con **axios**.

## Funcionalidades

- **Crear videos**: Formulario con campos como título, categoría, URL de imagen, URL de video y descripción.
- **Visualizar videos**: Página de inicio con la lista de videos categorizados.
- **Editar videos**: Modal con formulario para actualizar la información de un video.
- **Eliminar videos**: Opción para eliminar videos existentes.

## Iniciar el Servidor de Datos

Para que la aplicación funcione correctamente, debes levantar un servidor local con **json-server**. Ejecuta el siguiente comando en tu terminal:

```bash
json-server --watch data/db.json --port 3000