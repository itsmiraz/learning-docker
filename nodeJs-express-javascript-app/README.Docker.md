 docker run -d -p 8001:8000 -v ${pwd}:/app --name node-web-app-container test/node-app:v2
docker run -d -p 8001:8000 -v ${pwd}:/app --name node-web-app-container test/node-app:v4 npm run dev
docker run -d -p 8001:8000 -v ${pwd}:/usr/src/app -w /usr/src/app --name node-web-app-container:v4 test/node-app:v4 npm run dev

docker build . -t test/node-app:v3

docker run -d -p 8000:8000 test/node-app:v3

docker build . -t node-express-app-plain:v1
docker run -d -p 8000:8000 node-express-app-plain:v1
docker run -d -p 8001:8000 -v ${pwd}:/app --name node-web-app-c node-express-app-plain:v1 npm run dev

docker run -p 8001:8000 ${PWD}:/app /app/node_modules --name node-web-app-dev node-express-app-plain:v1


//Final working command 
 docker build -t testing/node-app .
docker run -d -p 8000:8000 testing/node-app
docker run -d -p 8001:8000 -v ${PWD}:/app -v /app/node_modules -e CHOKIDAR_USEPOLLING=true --name node-web-app-container testing/node-app npm run dev