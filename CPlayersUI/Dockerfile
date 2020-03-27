FROM node:8.10.0
RUN mkdir -p /usr/src/app
EXPOSE 8080
WORKDIR /usr/src/app
COPY dist /usr/src/app/dist
RUN npm install -g http-server
CMD ["http-server","dist/CPlayersUI"]