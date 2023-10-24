FROM node:18-alpine
WORKDIR /react-speedgame
ENV PATH = "./node_module/.bin: $PATH"
COPY . . 
RUN npm run build
CMD ["npm", "start"]