# React + Vite + Docker

This project runs a React app using [Vite](https://vitejs.dev/) and Docker, with support for **hot reloading inside Docker**.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/itsmiraz/learning-docker.git
cd react-docker


docker build -t react-docker .


docker run -p 5173:5173 \
  -e CHOKIDAR_USEPOLLING=true \
  -v "$(pwd):/app" \
  -v /app/node_modules \
  react-docker


http://localhost:5173

```bash