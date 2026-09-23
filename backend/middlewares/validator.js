const Response = require("./response");

const Validator = {
  requiredFields: (fields, res) => {
    let flag = true;
    for (const key in fields) {
      if (!fields[key] || fields[key] == undefined) {
        Response.fail(res, `${key} is required`, null);
        flag = false;
        break;
      }
    }
    return flag;
  }
};

module.exports = Validator;
