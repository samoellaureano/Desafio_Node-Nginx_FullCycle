FROM node:15

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

RUN npm install date-fns

COPY . .

CMD ["node", "app.js"]