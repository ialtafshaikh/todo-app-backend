FROM node:12-alpine
ENV NODE_ENV=production

WORKDIR /app



COPY package*.json ./

RUN npm install --production
# RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]