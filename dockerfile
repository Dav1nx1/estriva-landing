FROM node:16-alpine

#directory
WORKDIR /usr/server/app

#copy files for install packages
COPY ./package.json ./
COPY ./ .

RUN npm install

#build remix app
RUN npm run build # will build remix app
ENV NODE_ENV=production

CMD ["npm", "run" ,"dev"]