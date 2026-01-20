FROM node:20.19.6 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
#RUN npm run build:dev
#
#FROM node:20.19.6
#
#WORKDIR /app
#
#COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
