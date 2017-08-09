'use strict';
var schedule = require('node-schedule');

//config your schedule
var rule = new schedule.RecurrenceRule();
rule.hour = [2,4,6,8,10];
rule.minute = 30;

//more usage in https://github.com/node-schedule/node-schedule

schedule.scheduleJob(rule, function () {
    //do your work here
    //...
});
