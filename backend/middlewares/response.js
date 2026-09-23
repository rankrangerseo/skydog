const Response = {
  success: (res, msg, data = []) => {
    res.status(200).send({ success: true, message: msg, data });
  },
  created: (res, msg, data = []) => {
    res.status(201).send({ success: true, message: msg, data });
  },
  unauthorized: (res, msg, data = []) => {
    res.status(401).send({ success: false, message: msg, data });
  },
  fail: (res, msg, data = []) => {
    res.status(400).send({ success: false, message: msg, data });
  },
  error: (res, msg, data = []) => {
    res.status(400).send({ success: false, message: msg, error: data });
  }
};
module.exports = Response;
