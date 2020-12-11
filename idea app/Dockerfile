# pull official base image
FROM node:13.12.0-alpine
# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# RUN useradd -ms /bin/bash admin

# set working directory
# RUN useradd -ms /bin/bash admin
# COPY . /app


WORKDIR /app

# ENV PATH $PATH:/usr/lib/postgresql/$PG_MAJOR/bin
# ENV PGDATA /var/lib/postgresql/data
# # this 777 will be replaced by 700 at runtime (allows semi-arbitrary "--user" values)
# RUN mkdir -p "$PGDATA" && chown -R postgres:postgres "$PGDATA" && chmod 777 "$PGDATA"
# VOLUME /var/lib/postgresql/data

# RUN chown -R admin:admin /app
# RUN chmod 777 /app
# USER admin

# RUN chown -R admin:admin /app
# RUN chmod 755 /app
# USER admin

RUN npm install -g @nestjs/cli
RUN npm install -g @angular/cli

EXPOSE 4200