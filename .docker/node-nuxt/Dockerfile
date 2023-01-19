#FROM node:16.13.2 AS base
FROM --platform=linux/amd64 node:latest AS base

# Install node modules
RUN #npm install -g nodemon

# create destination directory
RUN mkdir -p /usr/frontend
WORKDIR /usr/frontend

EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=5000

############################################
# Этот этап используется для развертывания #
############################################
FROM base AS app

# copy the app, note .dockerignore
COPY ./frontend-nuxt /usr/frontend

# install vendor libraries from package-lock.json
RUN npm ci

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

#Now we can run our app
CMD ["npm", "start"]

############################################
# Этот этап используется для разработки #
############################################
FROM base AS dev

ADD .docker/node-nuxt/start.sh /start.sh
RUN chmod 775 /start.sh

ENTRYPOINT "/start.sh"
#CMD ["npm"]
CMD /bin/bash -c "tail -f /dev/null"
