const _ = require('lodash');

const users = [
  { user: 'santpal', active: true },
  { user: 'kalra', active: false }
];

const activeUsers = _.filter(users, { active: true });

console.log("Active users:", activeUsers);
