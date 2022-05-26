FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --no-progress

COPY . .
EXPOSE 8080

CMD ["npm", "start"]