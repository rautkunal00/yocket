const { Op } = require("sequelize");
const db = require("../model");
const Event = db.event;

async function getUpcomingEvents() {
  const event = await Event.findAll({
    where: {
      start_time: {
        [Op.gt]: new Date(Date.now() + 10 * 60 * 1000),
      },
    },
  });
  return event;
}

async function getLiveEvents() {
  const event = await Event.findAll({
    where: {
      start_time: {
        [Op.gte]: new Date(Date.now()),
        [Op.lt]: new Date(Date.now() + 10 * 60 * 1000),
      },
    },
  });
  return event;
}

module.exports = { getUpcomingEvents, getLiveEvents };
