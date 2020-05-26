FROM nginx
COPY ./dist/garnet-core-fe /usr/share/nginx/html
EXPOSE 80
