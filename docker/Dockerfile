FROM node:22.21.1-bookworm-slim AS builder


#NPM installation
RUN npm install -g npm@10.9.3

#Angular installation
RUN npm install -g @angular/cli

WORKDIR /workspaces
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.29.1-alpine-slim
RUN rm -rf /usr/share/nginx/html/*
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /workspaces/dist/johnnybananagames-web/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
