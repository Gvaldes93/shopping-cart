FROM node:10-alpine

# Create app directory
WORKDIR /app
COPY . /app
ENV NODE_ENV production

RUN npm install
RUN npm test
RUN npm run build

EXPOSE 3000

CMD [ "node", "./lib/index.js" ]
