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
      res.locals.queryStatus = 'Sucessfully posted yearly goal to DB.';
      return next();
    })
    .catch(() => {
      console.log('Error in dashboardController.postYearlyGoal while querying database.');
      next({
        log: 'Error in dashboardController.postYearlyGoal while querying database.',
        status: 500,
        message: 'Error in dashboardController.postYearlyGoal while querying database.'
      })
    })
}

/**
 * Get the current donation amount that the user has made this year.
 * @param {*} req takes user ID
 * @param {*} res
 * @param {*} next
 * @returns number of the current donation sum.
 */
dashboardController.getCurrentYearlyDonations = function (req, res, next) {
  const { userId } = req.body;

  if (!userId) {
    console.log('Unsuccessful get of current yearly donations in dashboardController.getCurrentYearlyDonations, missing userId.');
    res.locals.queryStatus = 'Unsuccessful get of current yearly donations in dashboardController.getCurrentYearlyDonations, missing userId.';
    return next();
  }

  const query = {
    params: [userId],
    text: `SELECT current_amount
          FROM yearly_goals
          WHERE user_id = $1 AND year = DATE_PART('YEAR', CURRENT_TIMESTAMP);`
  }

  db.query(query.text, query.params)
    .then((dbRes) => {
      if (dbRes.rows.length >= 1) {
        res.locals.queryStatus = 'Sucussfully got current yearly donations from DB.';
        res.locals.currentYearlyDonations = dbRes.rows[0].current_amount;
      } else {
        res.locals.queryStatus = 'Unsuccessfully attempt to get current yearly donations from DB.';
      }
      return next();
    })
    .catch(() => {
      console.log('Error in dashboardController.getCurrentYearlyDonations while querying database.');
      next({
        log: 'Error in dashboardController.getCurrentYearlyDonations while querying database.',
        status: 500,
        message: 'Error in dashboardController.getCurrentYearlyDonations while querying database.'
      })
    })
}

/**
 * Post donations to the database AND update the yearly table sum count
 * @param {*} req userid, donation amount, payee, memo, category
 * @param {*} res nothing
 * @param {*} next
 */
dashboardController.postContribution = function(req, res, next) {
  if (!req.body.userId || !req.body.payee || !req.body.category || !req.body.amount) {
    console.log('Unsuccessful post of contribution in dashboardController.postContribution, missing information');
    res.locals.queryStatus = 'Unsuccessful post of contribution in dashboardController.postContribution, missing information';
  }

  const query = {
    params: [req.body.userId, req.body.payee, req.body.category, req.body.amount, req.body.memo],
    text: `INSERT INTO contributions (user_id, payee, category, amount, memo) VALUES ($1, $2, $3, $4, $5);
    UPDATE yearly_goals SET current_amount = (SELECT SUM(amount) AS newSum FROM contributions GROUP BY user_id, year HAVING user_id = $1 AND year = DATE_PART('YEAR', CURRENT_DATE)) WHERE user_id = $1;`
  }

  db.query(query.text, query.params)
    .then((dbRes) => {
      if (dbRes.rows.length >= 1) {
        res.locals.queryStatus = 'Successfully retrieved updated contribution sum for user in postContribution.';
      } else {
        console.log('Unsuccessful attempt to insert into contributions or update yearly_goals in dashboardController.postContribution');
        res.locals.queryStatus = 'Unsuccessful attempt to insert into contributions or update yearly_goals in dashboardController.postContribution';
      }
    })
    .catch(() => {
      console.log('Error in dashboardController.postContribution while querying database.');
      next({
        log: 'Error in dashboardController.postContribution while querying database.',
        status: 500,
        message: 'Error in dashboardController.postContribution while querying database.'
      })
    })


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