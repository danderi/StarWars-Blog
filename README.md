## 🌐 Live Demo

https://star-wars-blog-nine.vercel.app


# 🌌 Star Wars Blog

This project is a React-based web application that consumes data from the SWAPI (Star Wars API) and displays information about characters, planets, vehicles, and species.

## 🚀 Tech Stack

* React (Functional Components + Hooks)
* Flux architecture for global state management
* Webpack for bundling
* Vercel for deployment

## 🧠 State Management

The application uses a custom Flux implementation via a global store (`appContext.js`), allowing centralized state handling across components.

Key store sections include:

* People
* Planets
* Vehicles
* Species
* Favorites system

Each section maintains:

* Main data (list view)
* Detailed data
* Loading states

## ⚡ Performance Optimization

Originally, the app fetched detailed data sequentially, resulting in slow load times.

This was optimized by implementing parallel requests using `Promise.all`, significantly reducing loading time.

## 🖼️ Image Handling

Due to issues with the external image API, the project was adapted to use locally stored images served from the `/public` directory.

Images are dynamically loaded using resource `uid`, allowing scalable and flexible rendering.

## 🌐 API Integration

Data is fetched from:
https://www.swapi.tech/

Endpoints used:

* `/people`
* `/planets`
* `/vehicles`
* `/species`

## 📦 Deployment

The project is deployed using Vercel.

Configuration includes:

* Node.js version update for compatibility
* Static asset handling via `/public`
* Webpack build output in `/dist`

## ⚠️ Known Limitations

* UI design is minimal and can be improved
* Some image categories (planets, vehicles, species) may be incomplete
* Initial load still depends on API response time

## 🔮 Future Improvements

* UI/UX redesign for better visual experience
* Lazy loading for detailed views
* Pagination improvements
* Better error handling
* Image coverage expansion for all categories

---

Made with 💙 and a bit of caffeine.
