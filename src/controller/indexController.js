const indexService = require("../service/indexService");

function getLiveEvents(req, res) {
  indexService.getLiveEvents().then((result) => {
    sendResult(result, res);
  });
}

function getUpcomingEvents(req, res) {
  indexService.getUpcomingEvents().then((result) => {
    sendResult(result, res);
  });
}

function sendResult(result, res) {
  if (result.status == "success") {
    res.status(200).send(result.data);
  } else {
    res.status(500).send(result.msg);
  }
}

module.exports = { getLiveEvents, getUpcomingEvents };
