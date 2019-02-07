FROM node:10-alpine

WORKDIR /app
COPY . /app
RUN npm install && npm test && npm run build

ENV NODE_ENV production
EXPOSE 3000

CMD [ "node", "./lib/index.js" ]
