FROM node:8-alpine
LABEL maintainer="Clevertech DevOps <support@clevertech.biz>"

# Update OS
RUN apk --no-cache add openjdk7-jre git make gcc g++ python build-base ca-certificates && update-ca-certificates

# Create the working dir
RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY . /opt/app

RUN touch .env
RUN npm run bootstrap
RUN npm run build
