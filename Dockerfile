FROM node:22-alpine

ENV TZ=Asia/Tokyo
WORKDIR /app

# package.json の packageManager に従って Yarn 4 を用意する。
RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml /app/

RUN yarn install --immutable && yarn cache clean

COPY . /app
