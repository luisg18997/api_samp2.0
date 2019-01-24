FROM node:10.15.0
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run","dev"]
EXPOSE 5000
