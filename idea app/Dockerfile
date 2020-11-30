# pull official base image
FROM node:13.12.0-alpine
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# set working directory
WORKDIR /app

RUN npm install -g @nestjs/cli
RUN npm install -g @angular/cli

USER node