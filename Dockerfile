FROM golang:latest 


ADD . ./
WORKDIR ./


RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]





