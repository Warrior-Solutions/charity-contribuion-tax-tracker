


const dashboardController = {};

dashboardController.testingServer = function (req, res, next) => {
  console.log('dashboardController.testingServer called.');
  next();
}

dashboardController.getPieChat = function (req, res, next) => {
  const query = {
    text: `SELECT `
  }
}

dashboardController.getLineGraph = function (req, res, next) => {
  const query = {
    text:
  }
}

dashboardController.getList = function (req, res, next) => {
  const query = {}
}

dashboardController.post

module.exports = dashboardController;