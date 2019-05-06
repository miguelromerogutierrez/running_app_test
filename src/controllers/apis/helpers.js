function getAPIError(code, message) {
  return {
    error: true,
    code,
    message,
  };
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(String(password));
}

function validateName(name) {
  const re = /^\w+(\s\w+){0,}$/;
  return re.test(String(name));
}

module.exports = {
  getAPIError,
  validateEmail,
  validatePassword,
  validateName,
};