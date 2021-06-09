import EventEmitter from "events";

class ErrorHandler extends EventEmitter {
  
}

const errorHandler = new ErrorHandler();

errorHandler.on('operationalError', (data) => {
  console.log('an operational error occured');
  console.log(data);
});

export default errorHandler;