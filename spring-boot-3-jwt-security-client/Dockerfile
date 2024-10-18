FROM node:20.16.0 AS builder

WORKDIR /webappweb

COPY package*.json ./

RUN npm cache clean --force

RUN npm install -f

COPY . ./

RUN npm run build

FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /webappweb/dist/spring-boot-3-jwt-security-client/browser/ /usr/share/nginx/html

#exposing internal port
EXPOSE 80
