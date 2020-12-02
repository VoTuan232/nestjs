# pull official base image
FROM node:13.12.0-alpine
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN useradd -ms /bin/bash admin

# set working directory
WORKDIR /app

RUN chown -R admin:admin /app
RUN chmod 755 /app
USER admin

RUN npm install -g @nestjs/cli
RUN npm install -g @angular/cli