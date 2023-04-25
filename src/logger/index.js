import client, { ADD_LOG } from '../apolloClient';

class Logger {
  constructor() {
    this.logs = [];
//    logger.log('Logger initialized');
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}`;
  
    // Log to the console
//    logger.log(logMessage);
  
    // Save the log message to the logs array
    this.logs.push(logMessage);
//    logger.log('Log saved to the logs array');
  
    // Send the log message to the server
    try {
      const response = await client.mutate({
        mutation: ADD_LOG,
        variables: {
          message,
          timestamp,
        },
      });
      console.log('Log sent to server:', response);
    } catch (error) {
      console.error('Error sending log to server:', error);
    }
  }

  getLogs() {
    logger.log('Retrieving logs');
    return this.logs;
  }
}

const logger = new Logger();

export default logger;
