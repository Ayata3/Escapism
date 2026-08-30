FROM node:22-alpine

ENV TZ=Asia/Tokyo
WORKDIR /app

# .yarnrc.yml の yarnPath が指す Yarn 本体もあわせて必要になる。
COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/releases /app/.yarn/releases

RUN yarn install --immutable && yarn cache clean

COPY . /app
