FROM node:alpine
COPY /app /api
WORKDIR /api
RUN yarn install
EXPOSE 5000
CMD yarn start