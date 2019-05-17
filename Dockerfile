FROM node:8-alpine
LABEL maintainer="docker test"

# Update OS
RUN apk --no-cache add openjdk7-jre git make gcc g++ python build-base ca-certificates && update-ca-certificates

# Create the working dir
RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY . /opt/app

RUN touch .env
RUN npm run install
RUN npm run build
