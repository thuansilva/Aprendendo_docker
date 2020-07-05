FROM node:lts-alpine
WORKDIR /home/node/api
COPY package.json yarn.* ./
RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "run", "dev"]