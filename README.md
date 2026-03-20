# Proyecto: Todo List en TypeScript con Docker

## Descripción

Este proyecto consiste en el desarrollo de una aplicación de consola utilizando **TypeScript** para la gestión de tareas (Todo List)

La aplicación permite:

* Crear tareas
* Consultar tareas
* Marcar tareas como completadas
* Eliminar tareas completadas
* Obtener estadísticas de las tareas

El proyecto se ejecuta dentro de un contenedor Docker, lo que permite un entorno controlado y reproducible.

---

## 🛠️ Tecnologías utilizadas

* TypeScript
* Node.js
* Docker
* JavaScript (compilado desde TypeScript)

---

## Estructura del proyecto

```
proyecto-ts-docker/
│
├── src/
│   ├── index.ts
│   ├── todoItem.ts
│   └── todoCollection.ts
│
├── dist/
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## Instalación y ejecución

### 1. Crear el contenedor Docker

```bash
docker run -dit \
--name ts-container \
-v $(pwd):/app \
-w /app \
node:18-alpine sh
```

### 2. Acceder al contenedor

```bash
docker exec -it ts-container sh
```

### 3. Instalar dependencias

```bash
npm init -y
npm install typescript
npx tsc --init
```

---

## Ejecución del proyecto

### Compilar el código

```bash
npx tsc
```

### Ejecutar la aplicación

```bash
node dist/index.js
```

---

## Funcionalidades principales

### Modelo de datos

Se implementa la clase `TodoItem`, que representa una tarea con:

* ID
* Descripción
* Estado (completa/incompleta)

### Colección de tareas

Se implementa la clase `TodoCollection`, que permite:

* Agregar tareas (`addTodo`)
* Obtener tareas (`getTodoItems`)
* Buscar por ID (`getTodoById`)
* Marcar como completada (`markComplete`)
* Eliminar tareas completadas (`removeComplete`)
* Obtener estadísticas (`getItemCounts`)

---

## Operaciones CRUD implementadas

| Operación | Método         |
| --------- | -------------- |
| Create    | addTodo        |
| Read      | getTodoItems   |
| Update    | markComplete   |
| Delete    | removeComplete |

---

## Ejemplo de salida

```
Adam's Todo List (3 items to do)
1   Buy Flowers
2   Get Shoes
3   Collect Tickets
4   Call Joe   (complete)
```


## Notas importantes

* No se deben modificar los archivos dentro de la carpeta `dist`, ya que son generados automáticamente.
* El archivo `package-lock.json` se mantiene para asegurar la consistencia de dependencias.
