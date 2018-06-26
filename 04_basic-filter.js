function getShortMessages(messages) {
  let result = [];
  let filtered = messages.filter((msgObj) => {
    return msgObj.message.length < 50;
  }).map((msgObj) => {
    result.push(msgObj.message);
  });
  return result;
}

module.exports = getShortMessages;
