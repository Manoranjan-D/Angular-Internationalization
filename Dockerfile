#stage-1

FROM node:15.14.0-alpine3.10 as build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod


#stage-2

FROM nginx

COPY --from=build /app/dist/angular-internationalization /usr/share/nginx/html
