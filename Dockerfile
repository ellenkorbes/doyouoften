FROM node:alpine
EXPOSE 8080
ADD one.js /
CMD node /one.js
