FROM node:carbon as builder

# Create app directory
WORKDIR ../server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ../server

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Stage 2 build for creating smaller imagenpm
FROM node:carbon-alpine
WORKDIR ./

COPY --from=builder ../server .

EXPOSE 3000

CMD [ "npm", "start" ]