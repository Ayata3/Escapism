FROM node:18-alpine

ENV TZ=Asia/Tokyo
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install && yarn cache clean

COPY . /app
