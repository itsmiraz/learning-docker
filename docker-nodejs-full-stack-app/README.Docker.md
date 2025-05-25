/for building the project

docker build -t node-js-full-stack-app .

docker run -d -p 3001:3000 -v ${PWD}/src:/app/src -v ${PWD}/package.json:/app/package.json -v ${PWD}/tsconfig.json:/app/tsconfig.json -v /app/node_modules -e CHOKIDAR_USEPOLLING=true --name ts-dev-full-stack-container node-js-full-stack-app npm run dev

docker run -d -p 3001:3000 -p 9229:9229 -v ${PWD}/src:/app/src -v ${PWD}/package.json:/app/package.json -v /app/node_modules -e CHOKIDAR_USEPOLLING=true --name ts-dev-full-stack-container node-js-full-stack-app npm run dev



docker stop ts-dev-full-stack-container
docker rm ts-dev-full-stack-container