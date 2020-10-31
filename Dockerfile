FROM node:latest
WORKDIR /app
COPY ..
RUN npm install
RUN npm run production
EXPOSE 3004
CMD ["npm", "start"]