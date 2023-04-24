import client, { ADD_LOG } from '../apolloClient';

class Logger {
  constructor() {
    this.logs = [];
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}`;
  
    // Log to the console
    console.log(logMessage);
  
    // Save the log message to the logs array
    this.logs.push(logMessage);
  
    // Send the log message to the server
    try {
      const response = await client.mutate({
        mutation: ADD_LOG,
        variables: {
          message,
          timestamp,
        },
      });
      console.log('Log sent to server:', response); // Add this line
    } catch (error) {
      console.error('Error sending log to server:', error);
    }
  }
  

  getLogs() {
    return this.logs;
  }
}

const logger = new Logger();

export default logger;
