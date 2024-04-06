FROM node:latest
RUN yum update -y && yum upgrade -y
WORKDIR /tmp/
EXPOSE 3000
COPY ../practice /tmp/react_practice/practice
RUN npm install npm@10.5.0
ENTRYPOINT [ "node start" ]
