# Servientrega Backend

Antes de iniciar a probar todo asegurate de tener los modulos instalados, si no es así, ejecuta el siguiente comando en tu terminal

```bash
npm i
```

## Levantantando el servidor

Para levantar el servidor y empezar a utilizar la API debes ejecutar el siguiente comando

```bash
npm run dev
```

## Endpoints

1. Usuarios

- Obtener todos los usuarios registrados

    - Method: `GET`

```bash
http://127.0.0.1:5010/user
```

- Obtener un usuario por su identificación

    - Method: `GET`

```bash
http://127.0.0.1:5010/user/:dni
```

- Actualizar un usuario (debes colocar el número de identificación en los parametros)

    - Method: `PUT`

```bash
http://127.0.0.1:5010/user/:dni
```

- Eliminar un usuario (debes colocar el número de identificación en los parametros)

    - Method: `DELETE`

```bash
http://127.0.0.1:5010/user/:dni
```

- Agregar un usuario (debes colocar el número de identificación en los parametros)

    - Method: `POST`

```bash
http://127.0.0.1:5010/user
```

2. Envíos

- Obtener todos los envios registrados

    - Method: `GET`

```bash
http://127.0.0.1:5010/envio
```

- Obtener un envio por su id

    - Method: `GET`

```bash
http://127.0.0.1:5010/envio/:id
```

- Actualizar un envio (debes colocar el número de identificación en los parametros)

    - Method: `PUT`

```bash
http://127.0.0.1:5010/envio/:id
```

- Eliminar un envio (debes colocar el número de identificación en los parametros)

    - Method: `DELETE`

```bash
http://127.0.0.1:5010/envio/:id
```

- agregar un envio (debes colocar el número de identificación en los parametros)

    - Method: `POST`

```bash
http://127.0.0.1:5010/envio
```