<<<<<<< HEAD
=======
/* eslint-disable linebreak-style */
>>>>>>> origin/samerbuna-finalcode
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
<<<<<<< HEAD
  mongodbUri: 'mongodb://localhost:27017/test',
=======
  mongodbUri: "mongodb+srv://admin:admin@cluster0-al3vb.mongodb.net/test?retryWrites=true&w=majority",
  //mongodbUri: 'mongodb://localhost:27017/test',
>>>>>>> origin/samerbuna-finalcode
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
