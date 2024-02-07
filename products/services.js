const data = require("./data");

function create(newPost) {
  return data.insert({
    ...newPost,
    createdAt: new Date().getUTCMilliseconds(),
  });
}

module.exports = {
  create,
};
