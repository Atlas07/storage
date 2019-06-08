FROM node:11.6.0-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm i
COPY . /app
EXPOSE 5050
CMD [ "npm", "start" ]
