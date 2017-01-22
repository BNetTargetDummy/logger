const winston = require('winston').cli();
const uuid = require('uuid');

module.exports = (arg = 'console') => {
  const timestamp = (new Date()).toLocaleTimeString();

  // 'console' logger only outputs to the command line.
  winston.loggers.add('console', {
    console: {
      json: true,
      stringify: true,
      timestamp,
    },
  });

  // 'file' logger outputs to command line and persists to a flat file.
  winston.loggers.add('file', {
    console: {
      json: true,
      stringify: true,
      timestamp,
    },
    file: {
      filename: 'targetdummy.log',
      timestamp,
    },
  });

  // Get the winston logger that matches the argument flag.
  const logger = winston.loggers.get(arg);
  const request_id = uuid.v1();

  return {
    info: msg => logger.log('info', msg, { request_id }),
    error: msg => logger.log('error', msg, { request_id }),
  };
};
