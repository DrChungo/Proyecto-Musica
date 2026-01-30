# Proyecto Angular – Techno Page

Este proyecto es una **aplicación web desarrollada con Angular** cuya temática principal es el **techno**. La idea es ofrecer una página sencilla, visual y funcional donde poder reproducir un vídeo principal y gestionar una lista de canciones guardadas.

El proyecto está pensado como ejercicio práctico de Angular, usando **componentes**, **routing**, **eventos**, **inputs/outputs** y **estilos personalizados**.


## Ejecución del proyecto
Descarga el repositorio descomprimelo en una carpeta y ejecuta el archivo **run.bat**. Asegurate de tener todas las dependencias "npm install" en tu consola de comandos


##  Idea general

La aplicación se divide en **tres pestañas principales**:

1. **Inicio** – Página principal con un vídeo centrado y controles
2. **Guardadas** – Lista de canciones guardadas (enlaces)
3. **Añadir** – Formulario para añadir nuevas canciones

Todo el flujo está orientado a ser simple y directo: añadir → guardar → mostrar → eliminar.

---

## Estructura de la aplicación

La app está organizada por **componentes**, siguiendo buenas prácticas de Angular.

```
src/
 ├── app/
 │   ├── components/
 │   │   ├── add-song-form/
 │   │   ├── hero/
 │   │   ├── login-form/
 │   │   ├── menu/
 │   │   └── song-list/
 │   ├── pages/
 │   │   ├── add/
 │   │   ├── guardadas/
 │   │   ├── login/
 │   │   └── principal/
 │   ├── Models/
 │   │   └── song.ts
 │   └──services/
 │      └── songs.ts

```

### Componentes clave

- **MenuComponent**
  - Barra de navegación entre las pestañas

- **HeroComponent**
  - Contiene el vídeo principal
  - Título arriba del vídeo
  - Botones debajo del vídeo

- **GuardadasComponent**
  - Muestra las canciones guardadas
  - Usa un componente hijo para listarlas

- **ListaCancionesComponent**
  - Muestra cada canción en un `div`
  - Botón para ir al enlace
  - Botón para eliminar la canción

- **AñadirComponent**
  - Input para introducir el link de la canción
  - Botón para añadirla a la lista

---

##  Comunicación entre componentes

- Se usan **@Input()** para pasar la lista de canciones a los componentes hijos
- Se usan **@Output() + EventEmitter** para:
  - Eliminar canciones
  - Notificar acciones al componente padre

Esto mantiene la app modular y fácil de escalar.








