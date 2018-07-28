FROM node:latest

WORKDIR /usr/app

COPY package.json /usr/app
COPY package-lock.json /usr/app

RUN npm install -g yarn babel-cli
RUN yarn

COPY . /usr/app

ENV HOST=0.0.0.0

CMD yarn dev
