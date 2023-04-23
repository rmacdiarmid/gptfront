// src/logger/index.js
class Logger {
    constructor() {
      this.logs = [];
    }
  
    log(message) {
      const timestamp = new Date().toISOString();
      const logMessage = `${timestamp} - ${message}`;
  
      // Log to the console
      console.log(logMessage);
  
      // Save the log message to the logs array
      this.logs.push(logMessage);
    }
  
    getLogs() {
      return this.logs;
    }
  }
  
  const logger = new Logger();
  
  export default logger;
  