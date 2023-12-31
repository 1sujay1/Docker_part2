FROM node

WORKDIR /apps

COPY package.json /apps

RUN npm install

COPY . /apps

EXPOSE 8000

CMD ["node","server.js"]

