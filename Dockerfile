FROM node:6.9.5-alpine

WORKDIR /app

RUN npm install -g -s --no-progress yarn

ADD . /app

RUN yarn install

EXPOSE 8081
CMD ["node", "index.js"]
