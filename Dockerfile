FROM node:12.16.2-alpine

WORKDIR /app

ADD . /app

RUN yarn install

EXPOSE 8081
CMD ["node", "index.js"]
