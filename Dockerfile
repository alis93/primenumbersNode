FROM golang:latest 


ADD . ./
WORKDIR ./


RUN npm install

CMD ["-url","http://google.com"]




