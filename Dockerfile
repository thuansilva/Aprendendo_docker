FROM node:lts-alpine
WORKDIR /home/node/api
COPY package.json yarn.* ./
RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "run", "dev"]



# FROM kartoza/postgis:11.0-2.5

# ADD ssl_cert.pem /etc/ssl/certs/ssl_cert.pem
# ADD localhost_ssl_key.pem /etc/ssl/private/ssl_key.pem

# RUN chmod 400 /etc/ssl/private/ssl_key.pem