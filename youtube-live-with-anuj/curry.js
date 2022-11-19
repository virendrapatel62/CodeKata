const logger = (type) => {
  // type = 'log' | 'error'
  return (message) => console[type](`${type} : ${message}`);
};

const infoLogger = logger("log");
const errorLogger = logger("error");

errorLogger("Wrong");
infoLogger("Yes");
