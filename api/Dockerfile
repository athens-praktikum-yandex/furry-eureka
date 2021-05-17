FROM node:alpine
WORKDIR /app
COPY ./ ./
RUN npm install && tsc
EXPOSE 5000
CMD node app/dist/server.js