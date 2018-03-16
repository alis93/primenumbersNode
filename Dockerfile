FROM golang:latest 


ADD . ./
WORKDIR ./


RUN npm install
RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]





