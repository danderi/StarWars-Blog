# 🌌 Star Wars Blog

Aplicación web construida con React que consume la API de Star Wars para mostrar información de personajes, planetas, vehículos y especies, con manejo de estado global y optimizaciones de performance.

---

## 🚀 Live Demo

👉 https://star-wars-blog-nine.vercel.app

---

## 📸 Preview

<img width="876" height="695" alt="image" src="https://github.com/user-attachments/assets/2db76332-ccd5-4f4d-a667-03dd803ba55c" />


---

## 🛠️ Tech Stack

* React (Hooks + Functional Components)
* Flux (Custom global state)
* Webpack
* CSS
* Deployment en Vercel

---

## ✨ Features

* 📦 Consumo de API externa (SWAPI)
* 🔄 Manejo global de estado con arquitectura Flux
* ⭐ Sistema de favoritos persistente en la app
* ⚡ Optimización de requests usando `Promise.all`
* 🖼️ Render dinámico de imágenes locales por `uid`
* 📱 Base responsive

---

## 🧠 Decisiones Técnicas

### 🔄 Manejo de estado

Se implementó una arquitectura Flux custom mediante un store global (`appContext.js`) para centralizar:

* Datos principales (listas)
* Detalles por recurso
* Estados de carga

Esto permite desacoplar la lógica de los componentes y mejorar la escalabilidad.

---

### ⚡ Optimización de performance

Inicialmente, las requests se realizaban de forma secuencial.

Se refactorizó utilizando `Promise.all` para ejecutar llamadas en paralelo, reduciendo significativamente los tiempos de carga.

---

### 🖼️ Manejo de imágenes

Debido a inconsistencias en la API externa de imágenes:

* Se migró a almacenamiento local en `/public`
* Se implementó carga dinámica basada en `uid`
* Mejora en estabilidad y control de assets

---

## 🌐 API

Datos obtenidos de:

👉 https://www.swapi.tech/

Endpoints utilizados:

* `/people`
* `/planets`
* `/vehicles`
* `/species`

---

## 📦 Instalación local

```bash
git clone https://github.com/danderi/StarWars-Blog.git
cd StarWars-Blog
npm install
npm run dev
```

---

## ⚙️ Configuración

No requiere variables de entorno para funcionar en local.

---

## 🚀 Deployment

Deploy realizado en Vercel con:

* Build mediante Webpack
* Assets estáticos desde `/public`
* Output en `/dist`

---

## ⚠️ Limitaciones actuales

* UI básica (enfocada en funcionalidad)
* Algunas imágenes faltantes
* Dependencia del tiempo de respuesta de la API

---

## 🔮 Mejoras futuras

* Rediseño UI/UX
* Lazy loading en vistas de detalle
* Paginación optimizada
* Manejo de errores más robusto
* Cobertura completa de imágenes

---

## 🧠 Lo que demuestra este proyecto

* Consumo y manejo de APIs externas
* Arquitectura de estado global sin librerías externas
* Optimización de performance en frontend
* Resolución de problemas reales (assets externos)
* Deploy productivo

---

Hecho con 💙, café y unas cuantas peleas con la API 😏
