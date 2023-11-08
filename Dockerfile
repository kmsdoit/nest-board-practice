FROM node:18
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN yarn install
RUN yarn run build
EXPOSE 3000
ENV NODE_ENV=development
CMD ["node", "dist/main.js"]
