FROM node:18
WORKDIR /usr/src/app/client
COPY ./client/package*.json ./
RUN npm ci --omit=dev
COPY ./client ./
RUN npm run build
WORKDIR /usr/src/app/server
COPY ./server/package*.json ./
RUN npm ci --omit=dev
COPY ./server ./
EXPOSE 8080
CMD [ "npm", "start" ]
