// import DB model
const db = require('../model/model');

// Initialize authController
const authController = {};

// TODO: Should we make a password reset system? How do we do that and send an email to a user?
// TODO: At the very least we can set up a system on the dashboard page where the user can change their password.

authController.createNewUser = function (req, res, next) {
  // Extract email and password to use in query.
  const { email, password } = req.body;
  // const { email, password }  = req.params

  if (!email || !password) {
    res.locals.queryStatus = 'unsuccessful create new user attempt, missing email or password';
    return next();
  }

  const query = {
    params: [email, password],
    // Create new user in DB and then pull out that users id for user state management on frontend.
    text: `INSERT INTO users (email, password) VALUES ($1, $2);
    SELECT _id FROM USERS WHERE email = $1 AND password = $2;`
  };


  db.query(query.text, query.params)
    .then((dbRes) => {
      if (dbRes.rows.length >= 1) {
        res.locals.userId = dbRes.rows[0]._id;
        queryStatus = 'Successfully created user, redirecting to dashboard';
      } else {
        console.log('User data not returned from authController.createNewUser');
        res.locals.queryStatus = 'User data not returned from authController.createNewUser, not redirecting to dashboard';
      }
      return next();
    })
    .catch(() => {
      console.log('Error in authController.createNewUser');
      return next({
        log: 'Error in authController.createNewUser while querying DB',
        status: 500,
        message: 'Internal server error in authController.createNewUser while querying DB'
      });
    });
};

authController.createNewOAuthUser = function (req, res, next) {
  const { email } = req.body;

  if (!email) {
    res.locals.queryStatus = 'Unsuccessful create new user with OAuth attempt, missing email';
    return next();
  }

  const query = {
    params: [email],
    // Create new user in DB and then pull out that users id for user state management on frontend.
    text: `INSERT INTO users (email) VALUES ($1);
    SELECT _id FROM users WHERE email = $1;`
  }

  db.query(query.text, query.params)
    .then((dbRes) => {
      if (dbRes.rows.length >= 1) {
        res.locals.userId = dbRes.rows[0]._id;
        res.locals.queryStatus = 'Successfully created new user with OAuth, redirecting to dashboard';
      } else {
        console.log('User data not returned from authController.createNewOAuthUser');
        res.locals.queryStatus = 'User data not returned from authController.createNewOAuthUser, not redirecting to dashboard';
      }
      return next();
    })
    .catch(() => {
      console.log('Error in authController.createNewOAuthUser');
      return next({
        log: 'Error in authController.createNewOAuthUser while querying DB',
        status: 500,
        message: 'Internal server error in authController.createNewOAuthUser while querying DB'
      });
    });
};

authController.attemptEmailLogin = function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.locals.queryStatus = 'Unsuccessful login user attempt, missing email or password';
    return next();
  }

  const query = {
    params: [email, password],
    // Create new user in DB and then pull out that users id for user state management on frontend.
    text: `SELECT _id FROM users WHERE email = $1 AND password = $2;`
  }

  db.query(query.text, query.params)
    .then((dbRes) => {
      if (dbRes.rows.length >= 1) {
        res.locals.userId = dbRes.rows[0]._id;
        res.locals.queryStatus = 'Successful login, redirecting to dashboard';
      } else {
        console.log('Unsuccessful login attempt. User data not returned from authController.attemptUserLogin');
        res.locals.queryStatus = 'Unsuccessful login attempt. User data not returned from authController.attemptUserLogin';
      }
      return next();
    })
    .catch(() => {
      console.log('Error in authController.attemptUserLogin');
      return next({
        log: 'Error in authController.attemptUserLogin while querying DB',
        status: 500,
        message: 'Internal server error in authController.attemptUserLogin while querying DB'
      });
    });
};

authController.attemptUserOAuthLogin = function (req, res, next) {
  const { email } = req.body;

  if (!email) {
    res.locals.queryStatus = 'Unsuccessful login user attempt with OAuth, missing email'
    return next();
  }

  const query = {
    params: [email],
    text: `SELECT _id FROM users WHERE email = $1;`
  }

  db.query(query.text, query.params)
    .then((dbRes) => {
      if (dbRes.rows.length >= 1) {
        res.locals.id = dbRes.rows[0]._id;
        res.locals.queryStatus = 'Successful login, redirecting to dashboard';
      } else {
        console.log('Unsuccessful login attempt. User data not returned from authController.attemptUserOAuthLogin');
        res.locals.queryStatus = 'Unsuccessful login attempt. User data not returned from authController.attemptUserOAuthLogin';
      }
      return next();
    })
    .catch(() => {
      console.log('Error in authController.attemptUserOAuthLogin');
      return next({
        log: 'Error in authController.attemptUserOAuthLogin while querying DB',
        status: 500,
        message: 'Internal server error in authController.attemptUserOAuthLogin while querying DB'
      });
    });
};

module.exports = authController;