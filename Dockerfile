FROM node:14

USER node

WORKDIR /sitm/sitm-template-api

ENV NODE_ENV="production"

ENV APP_NAME="sitm-template-api" \
    APP_VERSION="1.0.0" \
    APP_DESCRIPTION="Template service for blsm" \
    API_PORT="3100" 

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE $API_PORT

ENTRYPOINT [ "node", "index.js"]
