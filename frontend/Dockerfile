FROM node:20
WORKDIR /usr/src/app
COPY package*.json .
RUN yarn config set network-timeout 300000
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]