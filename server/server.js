const express = require('express');
const path = require('path'); // Attach file paths dynamically
// const bodyparser = require('bodyparser');


// Import the two controllers
const authController = require(path.join(__dirname, './controllers/authController.js'));
const dashboardController = require(path.join(__dirname, './controllers/dashboardController.js'));


const app = express();
const port = 3000;

// Parse JSON and URL encoded files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve the static file in the root directory
app.use(express.static(path.join(__dirname, './../index.html')));

//! TESTING REMOVE AFTER
// app.post('/testGetList', dashboardController.getCurrentYearlyDonations, (req, res, next) => {
//   console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ file: server.js ~ line 23 ~ app.post ~ dashboardController.getList', dashboardController.getList)
//   console.log(`res.locals.lineGraphData: ${res.locals.yearlyDonationData}`);
//     const arrayOfListData = res.locals.yearlyDonationData;
//     for (let i = 0; i < arrayOfListData.length; i++) {
//       console.log(arrayOfListData[i]);
//     }
//   return res.status(200).setHeaders('Content-Type', 'application/json').json(res.locals);
// });

app.post('/createUser', authController.createNewUser, (req, res, next) => {
  return res.status(200).setHeaders('Content-Type', 'application/json')
})



// Get all dashboard components
app.post('/dashboard',
  // dashboardController.getList,
  // dashboardController.getPieChart,
  // dashboardController.getLineGraph,
  dashboardController.getCurrentYearlyDonations,
  (req, res) => {
    const listData = res.locals.listData;
    const pieChartData = res.locals.pieChartData;
    const currentAmount = res.locals.currentAmount;
    const goalAmount = res.locals.goalAmount;
    const lineGraphData = res.locals.lineGraphData;
    console.log('data :', currentAmount, goalAmount);
    // listData, pieChartData, lineGraphData, yearlyDonationData = res.locals;
  return res.status(200);
})

app.get('/dashboard/moreListData', dashboardController.getMoreListData, (req, res) => {
  return res.status(200).setHeaders('Content-Type', 'application/json').json(res.locals.moreListData);
})

//post data to dashboard
app.post('/dashboard/yearlyGoal', dashboardController.postYearlyGoal, (req, res) => {
  return res.status(200);
})

app.post('/dashboard/addContribution', dashboardController.postContribution, (req, res) => {
  return res.status(200).setHeaders('Content-Type', 'application/json').json(res.locals.updatedContribution);
})

// Unknown route handler
app.post((req, res) => {
  return res.status(404).send('This page doesn\'t exist');
})

// Global Error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express default error log handler caught unknown middleware error',
    status: 400,
    message: { err: 'A default error was triggered'}
  }

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

