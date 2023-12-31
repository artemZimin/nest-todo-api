FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "start:dev"]

EXPOSE 3000
