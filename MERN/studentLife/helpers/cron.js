var CronJob = require('cron').CronJob;
const func = require("./trigger");




var job = new CronJob('* */2 * * * *', function () {
  func.getTeam();
}, null, true, 'America/Los_Angeles');
job.start();