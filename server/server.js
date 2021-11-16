const express = require('express');
const path = require('path'); // Attach file paths dynamically

// Import the two controllers
//! Fill in auth controller route
const authController = require(path.join(__dirname, ''));
const dashboardController = require(path.join(__dirname, './controllers/dashboardControllers.js'));


const app = express();
const port = 3000;

// serve the static file in the root directory
app.use(express.static(path.join(__dirname, './../index.html')));


// Get all dashboard components
app.get('/dashboard',
  dashboardController.getList,
  dashboardController.getPieChart,
  dashBoardController.getLineGraph,
  dashboardController.getCurrentYearlyDonations,
  (req, res) => {
    { listData, pieChartData, lineGraphData, yearlyDonationData } = res.locals;
  return res.status(200).setHeaders('Content-Type', 'application/json').json({ listData, pieChartData, lineGraphData, yearlyDonationData });
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


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

