FROM node:latest
WORKDIR /app
COPY ..
RUN npm install
RUN npm run production
CMD ["npm", "start"]