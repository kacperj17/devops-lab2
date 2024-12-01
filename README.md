# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

TO CREATE DOCKER BUILD:
```
docker build -t my-vite-app .
```
TO RUN DOCKER BUILD:
```
docker run -itd -p 3000:3000 my-vite-app
```
TO BUILD DOCKER COMPOSE:
```
docker compose build
```
TO RUN DOCKER COMPOSE:
```
docker compose up -d
```