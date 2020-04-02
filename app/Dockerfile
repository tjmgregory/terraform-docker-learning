FROM node:8

WORKDIR /usr/src/app

COPY package.json yarn.lock index.js ./

RUN yarn install

EXPOSE 80

CMD ["yarn", "start"]
