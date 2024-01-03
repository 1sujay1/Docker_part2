FROM node:14

WORKDIR /apps

COPY package.json /apps

RUN npm install

COPY . /apps

EXPOSE 80

CMD ["node","server.js"]

