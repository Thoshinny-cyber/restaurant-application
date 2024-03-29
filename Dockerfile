FROM node:16
WORKDIR /app
COPY package.* /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm","run","start"]
