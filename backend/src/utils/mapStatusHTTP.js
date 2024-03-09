const response = {
  SUCCESSFUL: 200,
  NOT_FOUND: 404,
  UNPROCESSABLE: 422,
};

const mapStatusHTTP = (status) => response[status];

module.exports = mapStatusHTTP;