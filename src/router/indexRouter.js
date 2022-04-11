const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controller/indexController");

function getLiveEvents(req, res) {
  indexController.getLiveEvents(req, res);
}

function getUpcomingEvents(req, res) {
  indexController.getUpcomingEvents(req, res);
}

indexRouter.get("/live-event", getLiveEvents);
indexRouter.get("/upcoming-event", getUpcomingEvents);

module.exports = indexRouter;
