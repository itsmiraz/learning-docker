# 1. Build the image

docker build -t testing/ts-node-app .

# 2. Production container

docker run -d -p 8800:8800 --name ts-prod testing/ts-node-app

# 3. Development container with live reload

docker run -d -p 8801:8800 -v ${PWD}/src:/app/src -v ${PWD}/package.json:/app/package.json -v ${PWD}/tsconfig.json:/app/tsconfig.json -v /app/node_modules -e CHOKIDAR_USEPOLLING=true --name ts-dev-v2 testing/ts-node-app npm run dev
