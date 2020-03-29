FROM node:13.6-alpine
WORKDIR /home/app
EXPOSE 8000

COPY package.json /home/app
RUN yarn install && yarn cache clean
RUN rm -rf node_modules/sharp && yarn add sharp

COPY . /home/app
