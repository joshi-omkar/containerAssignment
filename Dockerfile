FROM node:16

WORKDIR /app

COPY app/package*.json ./
COPY app/public/index.html ./

RUN npm install

COPY app/ ./

EXPOSE 5000

CMD [ "npm", "start" ]
