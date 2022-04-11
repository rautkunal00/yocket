const indexDao = require("../Dao/indexDao");

async function getLiveEvents() {
  const liveEvents = await indexDao.getLiveEvents();
  return returnResult(liveEvents);
}

async function getUpcomingEvents() {
  const upcomingEvents = await indexDao.getUpcomingEvents();
  return returnResult(upcomingEvents);
}

function returnResult(events) {
  if (!events) {
    return {
      status: "failure",
      msg: "Internal Server Error",
    };
  }
  return {
    status: "success",
    data: events,
  };
}

module.exports = { getLiveEvents, getUpcomingEvents };
