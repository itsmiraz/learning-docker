
//Final working command 
 docker build -t testing/node-app .
docker run -d -p 8000:8000 testing/node-app
docker run -d -p 8001:8000 -v ${PWD}:/app -v /app/node_modules -e CHOKIDAR_USEPOLLING=true --name node-web-app-container testing/node-app npm run dev