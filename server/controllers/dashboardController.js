// Import DB models
const db = require('../model/model');

// Initialize the dashboardController.
const dashboardController = {};


/**
 *
 * @inputs {*} req: Take in the user_id and the amount of the yearly goal
 * @outputs {*} res: nothing.
 * @param {*} next
 */
dashboardController.postYearlyGoal = function (req, res, next) {
  const { userId, yearlyGoal } = req.body;

  if (!userId || !yearlyGoal) {
    console.log('Unsuccessful post of yearly goal in dashboardController.yearlyGoal, missing userId or yearlyGoal.');
    res.locals.queryStatus = 'Unsuccessful post of yearly goal in dashboardController.yearlyGoal, missing userId or yearlyGoal.';
    return next();
  }

  const query = {
    params: [userId, yearlyGoal],
    text: `INSERT INTO users (user_id, goal_amount) VALUES ($1, $2);`
  }

  db.query(query.text, query.params)
    .then(() => {
      res.locals.queryStatus = 'Sucussfully posted yearly goal to DB.';
      return next();
    })
    .catch()
}

/**
 *
 * @inputs {*} req: Take in the year to query and the user_id.
 * @outputs {*} res:  The sum of donations for that year grouped by category.
 * @param {*} next
 */
dashboardController.getPieChat = function (req, res, next) => {
  const query = {
    text: `SELECT `
  }
}

/**
 *
 * @inputs {*} req: Take in the user_id.
 * @outputs {*} res:
 * @param {*} next
 */
dashboardController.getLineGraph = function (req, res, next) => {
  const query = {
    text:
  }
}

/**
 *
 * @inputs {*} req: Take in the user_id.
 * @outputs {*} res:
 * @param {*} next
 */
dashboardController.getList = function (req, res, next) => {
  const query = {}
}

dashboardController.post

module.exports = dashboardController;