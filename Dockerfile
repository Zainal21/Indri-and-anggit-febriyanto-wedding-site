FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

# production stage
FROM node:16-alpine AS production

WORKDIR /app

COPY --from=build /app/package*.json ./

RUN yarn install --production

COPY --from=build /app/public public

CMD ["yarn", "start"]
