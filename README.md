# Aplicación Node.js con Express

Este proyecto es una aplicación de API desarrollada en Node.js utilizando el framework Express. La API incluye funcionalidades para recibir y procesar matrices, realizar cálculos matemáticos, y validar las entradas utilizando `express-validator`.

## Requisitos

- [Node.js](https://nodejs.org/) (12.x o superior)
- [Docker](https://www.docker.com/products/docker-desktop) (opcional, para ejecución en contenedor)

## Instalación

### Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```sh
git clone https://github.com/newtyf/nodejs-api-zoluxions.git
cd nodejs-api-zoluxions
```

### Instalación de Dependencias

Instala las dependencias del proyecto utilizando `npm`:

```sh
npm install
```

### Configuración

Configura cualquier variable de entorno necesaria. Puedes crear un archivo `.env` en la raíz del proyecto para definir estas variables.

Ejemplo de archivo `.env`:

```env
PORT=3000
```

## Uso

### Ejecutar la Aplicación

Para ejecutar la aplicación localmente, utiliza el siguiente comando:

```sh
npm start
```

La aplicación se ejecutará en el puerto 3000 por defecto. Puedes acceder a la API en `http://localhost:3000`.

### Ejecutar en Docker

Si prefieres ejecutar la aplicación en un contenedor Docker, puedes construir y ejecutar la imagen con los siguientes comandos:

1. **Construir la Imagen de Docker**

   ```sh
   docker build -t nombre-de-tu-imagen .
   ```

2. **Ejecutar el Contenedor**

   ```sh
   docker run -p 3000:3000 nombre-de-tu-imagen
   ```

## Endpoints

### `POST /calcular`

Este endpoint recibe matrices `Q` y `R`, realiza cálculos sobre ellas y valida las entradas.

**Cuerpo de la Solicitud (JSON):**

```json
{
  "Q": [
    [
      -0.12309149097933281,
      0.9045340337332914,
      0.4082482904638621
    ],
    [
      -0.492365963917331,
      0.30151134457776285,
      -0.8164965809277264
    ],
    [
      -0.8616404368553292,
      -0.3015113445777631,
      0.4082482904638634
    ]
  ],
  "R": [
    [
      -8.124038404635959,
      -9.601136296387955,
      -11.078234188139948
    ],
    [
      0,
      0.9045340337332926,
      1.809068067466583
    ],
    [
      0,
      0,
      -8.881784197001252e-16
    ]
  ]
}
```

**Respuesta (JSON):**

```json
{
  "valorMaximo": -0.12309149097933281,
  "valorMinimo": -11.078234188139948,
  "promedio": -1.0240793467157438,
  "sumaTotal": -30.72238004076818,
  "QEsDiagonal": false,
  "REsDiagonal": false
}
```

## Validaciones

El endpoint `/calcular` realiza las siguientes validaciones:

- `Q` y `R` deben ser arreglos bidimensionales.
- Todos los valores en `Q` y `R` deben ser números flotantes.

## 💻 Author

- Portfolio - [@newtyf](https://newtyf.com)
- Instagram - [@newtyf](https://www.instagram.com/newt_yf/)
- LinkedIn - [@newtyf](https://www.linkedin.com/in/axel-mu%C3%B1oz/)
- Frontend Mentor - [@newtyf](https://www.frontendmentor.io/profile/TREz-bits)